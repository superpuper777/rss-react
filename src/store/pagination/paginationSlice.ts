import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  currentPage: number;
  itemsPerPage: number;
}

const initialState: SearchState = {
  currentPage: 1,
  itemsPerPage: 10,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    changeItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { changePage } = paginationSlice.actions;
export default paginationSlice.reducer;
