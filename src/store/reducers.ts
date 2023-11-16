import { combineReducers } from 'redux';

import peopleSlice from './people/peopleSlice';
import searchSlice from './search/searchSlice';

const rootReducer = combineReducers({
  people: peopleSlice,
  search: searchSlice,
});

export default rootReducer;
