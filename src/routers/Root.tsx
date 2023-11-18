import { Outlet, useLocation } from 'react-router-dom';
import '../App.css';

import { getSearchValue } from '../store/search/searchSelectors';
import { getCurrentPage } from '../store/pagination/paginationSelectors';
import { useAppSelector } from '../store/store';
import { useGetPeopleByNameQuery } from '../store/services/people';
import List from '../components/List';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import CrashButton from '../components/CrashButton';

const Root = (): JSX.Element => {
  const { pathname } = useLocation();

  const searchTerm: string = useAppSelector(getSearchValue);
  const currentPage: number = useAppSelector(getCurrentPage);

  const isDetailsShowed = pathname?.includes('details');

  const { isLoading, error } = useGetPeopleByNameQuery({
    searchTerm,
    currentPage,
  });

  if (error) {
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
        <main>{isLoading ? <Loading /> : <List />}</main>
      </div>
      <div id="detail" data-testid="details">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
