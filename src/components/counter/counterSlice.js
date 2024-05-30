import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value = state.value - action.payload;
    },
    resetCount: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
