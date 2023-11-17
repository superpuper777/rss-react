import { RootState } from '../store';

export const getCurrentPage = (state: RootState) =>
  state.rootReducer.pagination?.currentPage;
