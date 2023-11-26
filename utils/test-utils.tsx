import React from 'react';
import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTERS } from '../main';
import searchReducer from '../store/search/searchSlice';
import peopleReducer from '../store/people/peopleSlice';
import { render, RenderOptions } from '@testing-library/react';

// export function renderWithProviders(
//   ui: React.ReactElement,
//   {
//     store = configureStore({
//       reducer: { search: searchReducer, people: peopleReducer },
//     }),
//     ...renderOptions
//   } = {}
// ) {
//   type Props = {
//     children: string | JSX.Element | React.ReactNode;
//   };

//   function Wrapper({ children }: Props) {
//     return <Provider store={store}>{children}</Provider>;
//   }

//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }

// export const renderWithRouter = (
//   ui: React.ReactElement,
//   { route = '/' } = {}
// ) => {
//   window.history.pushState({}, 'Test page', route);

//   return {
//     user: userEvent.setup(),
//     ...render(ui, { wrapper: BrowserRouter }),
//   };
// };
type Props = {
  children: React.ReactNode;
};

export const renderWithRouterAndStore = (
  ui: React.ReactElement,
  store = configureStore({
    reducer: { search: searchReducer, people: peopleReducer },
  }),
  router = createBrowserRouter(ROUTERS),
  ...renderOptions: RenderOptions[]
  // ...renderOptions
) => {
  function Wrapper({ children }: Props): React.ReactElement {
    return (
      <Provider store={store}>
        {children}
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
