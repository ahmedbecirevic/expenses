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

    return Object.entries(res.data).map(([id, expense]) => {
      if (expense?.userId === localStorage.getItem("id")) {
        return {
          id,
          ...expense,
        }
      }
    });
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteExpense = createAsyncThunk("expenses/delete", async (id, { rejectWithValue }) => {
  try {
    const res = await axios.delete(`https://react-app-practice-5893f-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const createExpense = createAsyncThunk("expenses/addExpense", async (expense, { rejectWithValue }) => {
  try {
    const res = await axios.post(`https://react-app-practice-5893f-default-rtdb.europe-west1.firebasedatabase.app/expenses.json`, expense);
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
    removeExpense: (state, action) => {
      delete state.expenses[action.payload];
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
    [createExpense.pending]: (state) => {
      state.isLoading = true;
    },
    [createExpense.fulfilled]: (state, action) => {
      state.error.isError = false;
      state.isLoading = false;
    },
    [createExpense.rejected]: (state, action) => {
      state.error.message = action.payload;
      state.error.isError = true;
      state.isLoading = false;
    },
  },
});

export const { addExpense, addExpenses, removeExpense } = expenseSlice.actions;
export default expenseSlice;
