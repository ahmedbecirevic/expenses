import { configureStore } from "@reduxjs/toolkit";

import expenseReducer from "./features/expenseSlice";

const reducer = { expenseData: expenseReducer.reducer };

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
