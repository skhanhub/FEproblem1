import axios from 'axios';

export default {
  getPlanets: async function(){
    const result = await axios.get("https://5f5ff7f790cf8d00165573ed.mockapi.io/planets");
    return result.data;
  },
  getVehicles: async function(){
    const result = await axios.get("https://5f5ff7f790cf8d00165573ed.mockapi.io/vehicles");
    return result.data;
  },
  findPlanet: async function(planetNames, vehicleNames){
    let result = await axios.get("https://5f5ff7f790cf8d00165573ed.mockapi.io/planets");
    const planets = result.data;
    const planetIndex = Math.floor(Math.random() * planets.length);
    const hiddenPlanet = planets[planetIndex].name;

    const gameResult = {planet_name: hiddenPlanet}
    if(planetNames.includes(hiddenPlanet)) gameResult.status = "success";
    else gameResult.status = "false";

    return gameResult;
  },
}