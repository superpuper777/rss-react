import { RootState } from '../store';

export const getCrashError = (state: RootState) =>
  state.rootReducer.crash?.isError;
