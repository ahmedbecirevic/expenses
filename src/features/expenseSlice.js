import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expense: {},
  error: {
    isError: false,
    message: "",
  },
  isLoading: false,
};

// export const saveAllAnswers = createAsyncThunk(
//   "answers/saveAnswers",
//   async (args, { getState, rejectWithValue, dispatch }) => {
//     try {
//       const { answersData } = getState();
//       const res = await saveAnswersAndUpdateUserStatus(answersData.answers);
//       dispatch(setStatus(res.data.updatedStatus));

//       return res.data.answers;
//     } catch (err) {
//       dispatch(setShowSnackbarMessage({ isVisible: true }));

//       return rejectWithValue(err.message);
//     }
//   },
// );

export const expenseSlice = createSlice({
  name: "expenseData",
  initialState,
  reducers: {
    setExpense: (state, action) => {
      state.expense = action.payload;
    },
  },
  // extraReducers: {
  //   [saveAllAnswers.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [saveAllAnswers.fulfilled]: (state) => {
  //     state.error.isError = false;
  //     state.isLoading = false;
  //   },
  //   [saveAllAnswers.rejected]: (state, action) => {
  //     state.error.message = action.payload;
  //     state.error.isError = true;
  //     state.isLoading = false;
  //   },
  // },
});

export const { setExpense } = expenseSlice.actions;
export default expenseSlice;
