import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
