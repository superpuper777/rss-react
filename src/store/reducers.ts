import { combineReducers } from 'redux';

import peopleSlice from './people/peopleSlice';
import searchSlice from './search/searchSlice';
import paginationSlice from './pagination/paginationSlice';

const rootReducer = combineReducers({
  people: peopleSlice,
  search: searchSlice,
  pagination: paginationSlice,
});

export default rootReducer;
