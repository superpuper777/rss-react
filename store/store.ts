import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import rootReducer from './reducers';
import { peopleApi } from './services/people';

const store = configureStore({
  reducer: {
    rootReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>; //store.getState rootReducer

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
