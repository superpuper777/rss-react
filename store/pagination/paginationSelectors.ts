import { RootState } from '../store';

export const getCurrentPage = (state: RootState) =>
  state.rootReducer.pagination?.currentPage;

export const getItemsPerPage = (state: RootState) =>
  state.rootReducer.pagination?.itemsPerPage;
