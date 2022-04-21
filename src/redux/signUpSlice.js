import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = [];

export const signUpAuth = createAsyncThunk("users", async (payload) => {
  const response = await axios.post(
    "https://taskforum.herokuapp.com/api/auth/signup",
    payload
  );
  console.log(payload, "user");
  if (response.status === 200) {
    console.log(response.data, "hdsush");
    return response.data;
  } else {
    return response.data;
  }
});
export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpAuth.fulfilled, (state, action) => {
      state.push(action.payload.data);
    });
  },
});

// Action creators are generated for each case reducer function
// export const { decrement, incrementByAmount } = signUpSlice.actions;

export default signUpSlice.reducer;
