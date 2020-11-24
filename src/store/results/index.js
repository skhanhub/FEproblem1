import {planetsToBeSelected} from "../../config";

export const getTotalTime = state => {
  const planets = state.getData.planets;
  const vehicles = state.getData.vehicles;
  const selectedPlanets = state.formControl.selectedPlanets;
  const selectedVehicles = state.formControl.selectedVehicles;

  let totalTime = 0;
  Object.keys(selectedVehicles).forEach(id=>{
    const vehicle = selectedVehicles[id]
    const planet = selectedPlanets[id]

    totalTime = totalTime + planets[planet] / vehicles[vehicle].speed;
  })

  return totalTime
  
}

export const getSelected = state => {
  const selectedPlanets = state.formControl.selectedPlanets;
  const selectedVehicles = state.formControl.selectedVehicles;

  return (Object.values(selectedPlanets).length === planetsToBeSelected && Object.values(selectedVehicles).length === planetsToBeSelected); 
}