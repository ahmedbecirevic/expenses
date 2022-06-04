import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  expenses: [],
  error: {
    isError: false,
    message: "",
  },
  isLoading: false,
};

export const getAllExpenses = createAsyncThunk("expenses/getAll", async (args, { rejectWithValue }) => {
  try {
    const res = await axios.get("https://react-app-practice-5893f-default-rtdb.europe-west1.firebasedatabase.app/expenses.json");

    return Object.entries(res.data).map(([id, expense]) => ({
      id,
      ...expense,
    }));
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const expenseSlice = createSlice({
  name: "expenseData",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    addExpenses: (state, action) => {
      state.expenses = action.payload;
    },
  },
  extraReducers: {
    [getAllExpenses.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllExpenses.fulfilled]: (state, action) => {
      state.expenses = action.payload;
      state.error.isError = false;
      state.isLoading = false;
    },
    [getAllExpenses.rejected]: (state, action) => {
      state.error.message = action.payload;
      state.error.isError = true;
      state.isLoading = false;
    },
  },
});

export const { addExpense, addExpenses } = expenseSlice.actions;
export default expenseSlice;
