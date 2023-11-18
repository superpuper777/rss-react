import React from 'react';
import { render } from '@testing-library/react';

import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';

import searchReducer from '../store/search/searchSlice';
import peopleReducer from '../store/people/peopleSlice';

export function renderWithProviders(
  ui: React.ReactElement,
  {
    store = configureStore({
      reducer: { search: searchReducer, people: peopleReducer },
    }),
    ...renderOptions
  } = {}
) {
  type Props = {
    children: string | JSX.Element | React.ReactNode;
  };

  function Wrapper({ children }: Props) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
