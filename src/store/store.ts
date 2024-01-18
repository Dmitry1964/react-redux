import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from '../reducer/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>