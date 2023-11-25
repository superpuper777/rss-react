import { createSlice } from '@reduxjs/toolkit';

export interface ErrorState {
  isError: boolean;
}

const initialState: ErrorState = {
  isError: false,
};

const crashSlice = createSlice({
  name: 'crash',
  initialState,
  reducers: {
    toggleError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { toggleError } = crashSlice.actions;
export default crashSlice.reducer;
