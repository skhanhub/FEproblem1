import API from "../../utilities/API/API";
import { LOADING, ERROR, GET_PLANETS, GET_VEHICLES, FIND_PLANET, SELECTED_VEHICLES } from "../types";

export const getPlanets = () => async (dispatch) => {

  try {
    dispatch({ type: LOADING, payload: true })
 
    const data = await API.getPlanets();
    const formattedData = {};
    
    data.forEach(planet=>formattedData[planet.name]=planet.distance)
    dispatch({ type: GET_PLANETS, payload: formattedData })

    dispatch({ type: ERROR, payload: null })
    dispatch({ type: LOADING, payload: false })
  } catch (e) {
    dispatch({ type: ERROR, payload: e.message })
    dispatch({ type: LOADING, payload: false })
  }
}



export const getVehicles = () => async (dispatch) => {

  try {
    dispatch({ type: LOADING, payload: true })
    const data = await API.getVehicles();
    const formattedData = {};
    
    data.forEach(vehicle=>(
      formattedData[vehicle.name] = {
        total: vehicle.total_no,
        remaining: vehicle.total_no,
        maxDistance: vehicle.max_distance,
        speed: vehicle.speed,
      }
    ));

    dispatch({ type: ERROR, payload: null })
    dispatch({ type: GET_VEHICLES, payload: formattedData })
    dispatch({ type: LOADING, payload: false })
  } catch (e) {
    dispatch({ type: ERROR, payload: e.message })
    dispatch({ type: LOADING, payload: false })
  }
}

export const findPlanet = () => async (dispatch, getState) => {

  try {
    dispatch({ type: LOADING, payload: true })
    const selectedPlanets = Object.values(getState().formControl.selectedPlanets);
    const selectedVehicles = Object.values(getState().formControl.selectedVehicles);
    const data = await API.findPlanet(selectedPlanets, selectedVehicles);

    dispatch({ type: ERROR, payload: null })
    dispatch({ type: FIND_PLANET, payload: data })
    dispatch({ type: LOADING, payload: false })
  } catch (e) {
    dispatch({ type: ERROR, payload: e.message })
    dispatch({ type: LOADING, payload: false })
  }
}


export const upddateVehicles = (planetId, vehicle) => (dispatch, getState) => {
  
 
  const vehicles = getState().getData.vehicles;
  const previousVehicle = getState().formControl.selectedVehicles[planetId];


  if(previousVehicle){
    vehicles[previousVehicle].remaining = vehicles[previousVehicle].remaining + 1;
  }
  vehicles[vehicle].remaining = vehicles[vehicle].remaining - 1;

  dispatch({ type: SELECTED_VEHICLES, payload: {[planetId]: vehicle} })

  dispatch({ type: GET_VEHICLES, payload: vehicles })

}