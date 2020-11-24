import { SELECTED_PLANETS, SELECTED_VEHICLES, VALID_PLANET_OPTIONS, CLEAR } from "../types";

export const initialState = {
  selectedPlanets: {},
  selectedVehicles: {},
  validPlanetOptions: [],
}

 const formControl = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PLANETS:
      return { ...state, selectedPlanets: {...state.selectedPlanets, ...action.payload} }
    case SELECTED_VEHICLES:
      return { ...state, selectedVehicles: {...state.selectedVehicles, ...action.payload} }
    case VALID_PLANET_OPTIONS:
      return { ...state, validPlanetOptions: action.payload }
    case CLEAR:
      return { 
        ...state, 
        selectedPlanets: {},
        selectedVehicles: {}, 
      }
    default:
      return state
  }
}

export default formControl;