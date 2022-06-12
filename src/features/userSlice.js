import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions;
export default userSlice;
