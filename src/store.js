import { configureStore } from "@reduxjs/toolkit";

import expenseReducer from "./features/expenseSlice";
import userReducer from "./features/userSlice"

const reducer = { 
  expenseData: expenseReducer.reducer, 
  userData: userReducer.reducer
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
