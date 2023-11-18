import { Outlet, useLocation } from 'react-router-dom';
import '../App.css';

import { useAppSelector } from '../store/store';
import List from '../components/List';
import SearchBar from '../components/SearchBar';
import CrashButton from '../components/CrashButton';
import { getCrashError } from '../store/crash/crashSelectors';

const Root = (): JSX.Element => {
  const { pathname } = useLocation();
  const isDetailsShowed = pathname?.includes('details');
  const isError = useAppSelector(getCrashError);

  if (isError) {
    throw new Error('I crashed!');
  }

  return (
    <div
      className={isDetailsShowed ? 'app-wrapper-with-details' : 'app-wrapper'}
    >
      <div className="app" data-testid="app">
        <header className="header">
          <CrashButton />
          <SearchBar />
        </header>
        <main>
          <List />
        </main>
      </div>
      <div id="detail" data-testid="details">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
