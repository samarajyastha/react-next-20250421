import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import productReducer from "./product/productSlice.js";
import userPreferenceReducer from "./userPreference/userPreferenceSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  userPreference: userPreferenceReducer,
});

export default rootReducer;
