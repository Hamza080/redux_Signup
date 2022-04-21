import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./signUpSlice";
import signInReducer from "./signInSlice";
import dashBoardReducer from "./dashBoardSlice";
export default configureStore({
  reducer: {
    signUpData: signUpReducer,
    signInData: signInReducer,
    dashBoardData: dashBoardReducer,
  },
});
