import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPeopleBySearchTerm } from '../../pages/api';
// import { ResponseData } from '../../api/dto';
import { PeopleItem } from '../../components/List/ListItem/type';

const searchTerm: string = '';
const currentPage: number = 1;

export const fetchPeople = createAsyncThunk('people/fetchPeople', async () => {
  const response = await fetchPeopleBySearchTerm(searchTerm, currentPage);
  console.log(response.results);
  return response.results;
});

interface PeopleState {
  people: PeopleItem | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: PeopleState = {
  people: null,
  status: 'idle',
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchPeople.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.people = action.payload;
    });
  },
});

export default peopleSlice.reducer;
