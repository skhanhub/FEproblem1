import { combineReducers } from "redux";
import getData from "./getData";
import formControl from "./formControl";

const combineReducer = combineReducers({
  getData,
  formControl,
})

export default combineReducer;