import { RootState } from '../store';

export const getSearchValue = (state: RootState) =>
  state.rootReducer.search?.value;
