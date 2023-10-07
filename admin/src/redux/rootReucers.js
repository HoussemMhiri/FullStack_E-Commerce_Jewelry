import { combineReducers } from "redux";
import {
  adminReducer,
  incomeReducer,
  ordersReducer,
  productsReducer,
  userReducer,
} from "./reducer";

export const rootReducers = combineReducers({
  adminReducer: adminReducer,
  userReducer: userReducer,
  ordersReducer: ordersReducer,
  incomeReducer: incomeReducer,
  productsReducer: productsReducer,
});
