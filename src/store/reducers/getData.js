import { LOADING, ERROR, GET_PLANETS, GET_VEHICLES, FIND_PLANET } from "../types";

export const initialState = {
  planets: {},
  vehicles: {},
  hiddenPlanet: {
    status: null,
    planet_name: null
  },
  loading: false,
  error: null,
}

 const getData = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload }
    case ERROR:
      return { ...state, error: action.payload }
    case GET_PLANETS:
      return { ...state, planets: action.payload }
    case GET_VEHICLES:
      return { ...state, vehicles: action.payload }
    case FIND_PLANET:
      return { ...state, hiddenPlanet: action.payload }
    default:
      return state
  }
}

export default getData;