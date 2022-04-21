import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router";
import axios from "axios";
const initialState = {
  isAuthenticated: false,
};
export const loginAuth = createAsyncThunk("users", async (payload) => {
  const response = await axios.post(
    "https://taskforum.herokuapp.com/api/auth/signin",
    payload
  );
  ///////AAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
  if (response.status === 200) {
    return response.data;
  } else {
    return response.data;
  }
});
export const signInSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAuth.fulfilled, (state, action) => {
        if (action.payload.token !== "") {
          localStorage.setItem("token", action.payload.token);
        }
        state.isAuthenticated = true;
      })
      .addCase(loginAuth.rejected, (state, action) => {
        console.log("error message");
      });
  },
});

export default signInSlice.reducer;
