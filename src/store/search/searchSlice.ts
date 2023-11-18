import { createSlice } from '@reduxjs/toolkit';
import { getStorageByKey } from '../../utils/storage';

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: (getStorageByKey('searchTerm') as string) || '',
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
