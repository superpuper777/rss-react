import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Root from './routers/Root.tsx';
import ErrorPage from './routers/error-page.tsx';
import Details from './routers/details.tsx';
import ErrorBoundary from './components/ErrorBoundary/index.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'details/:peopleId',
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  </>
);
