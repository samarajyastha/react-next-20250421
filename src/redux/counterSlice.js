import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
    user: {
      name: "Ram",
      age: 20,
    },
  },
  reducers: {
    increaseCounter: (state) => {
      state.count = state.count + 1;
    },
    decreaseCounter: (state) => {
      state.count = state.count - 1;
    },
    resetCounter: (state) => {
      state.count = 1;
    },
    increaseCounterByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const {
  increaseCounter,
  decreaseCounter,
  resetCounter,
  increaseCounterByValue,
} = counterSlice.actions;

export default counterSlice.reducer;
