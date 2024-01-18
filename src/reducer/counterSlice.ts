import { createSlice } from "@reduxjs/toolkit"


export interface CounterState {
  value: number;
}

const counterState : CounterState = {
  value: 10,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    addMount: (state, action) => {
      state.value += action.payload;
    }
  }
})


export const {increment, decrement, addMount} = counterSlice.actions;

export default counterSlice.reducer