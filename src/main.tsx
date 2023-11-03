import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import ErrorBoundary from './components/ErrorBoundary/index.tsx';
import { ContextProvider } from './context/index.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ErrorBoundary>
);
