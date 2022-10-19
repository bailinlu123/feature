import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import cakeReducer from "../pages/Redux/cake/cakeReducer"
import {userReducer} from "../pages/Redux/users/userReducer"

export default combineReducers({
  auth,
  message,
  cake : cakeReducer,
  user : userReducer,
});
