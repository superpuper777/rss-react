import { RootState } from '../store';

export const getPeople = (state: RootState) => state.rootReducer.people?.people;
