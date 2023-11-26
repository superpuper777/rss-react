import { combineReducers } from 'redux';

import peopleSlice from './people/peopleSlice';
import searchSlice from './search/searchSlice';
import paginationSlice from './pagination/paginationSlice';
import crashSlice from './crash/crashSlice';

const rootReducer = combineReducers({
  people: peopleSlice,
  search: searchSlice,
  pagination: paginationSlice,
  crash: crashSlice,
});

export default rootReducer;
