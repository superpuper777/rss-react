import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  currentPage: number;
}

const initialState: SearchState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { changePage } = paginationSlice.actions;
export default paginationSlice.reducer;
