import { combineReducers } from "redux";
import {
  authReducer,
  cartReducer,
  productsReducer,
  savedReducer,
} from "./reducer";

const rootReducer = combineReducers({
  prodReducer: productsReducer,
  cart: cartReducer,
  authReducer: authReducer,
  savedReducer: savedReducer,
});
export default rootReducer;
