import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];
export const fetchPosts = createAsyncThunk("posts", async (token) => {
  console.log(token, "token");
  const response = await axios.get(
    "https://taskforum.herokuapp.com/api/post/",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (response.status === 400 || !response) {
    console.log("invalid Registration");
  } else {
    return response.data;
  }
});

export const dashBoardSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        console.log(action.payload.data, "data");
        return action.payload.data;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        console.log("error message");
      });
  },
});

// export const { decrement, incrementByAmount } = postsSlice.actions;

export default dashBoardSlice.reducer;
