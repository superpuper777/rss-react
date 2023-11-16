import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeInput } = searchSlice.actions;
export default searchSlice.reducer;
