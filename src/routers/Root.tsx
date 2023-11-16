import { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import '../App.css';

import SearchContext from '../context';
import { ContextPaginationProvider } from '../context/paginationContext';
import { fetchPeopleBySearchTerm } from '../api';
import List from '../components/List';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import CrashButton from '../components/CrashButton';
import { getPeople } from '../store/people/peopleSelectors';
import { fetchPeople } from '../store/people/peopleSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getStorageByKey } from '../utils/storage';

const Root = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const context = useContext(SearchContext);
  const people = useAppSelector(getPeople);
  console.log(people);
  const { setPeople, isError, isLoading, setIsLoading, setTotalItems } =
    context;

  const { pathname } = useLocation();
  const isDetailsShowed = pathname?.includes('details');

  useEffect(() => {
    setIsLoading(true);

    fetchPeopleBySearchTerm(
      (getStorageByKey('searchTerm') as string) && '',
      1
    ).then((data) => {
      setPeople(data.results);
      setTotalItems(data.count);
      setIsLoading(false);
    });
    dispatch(fetchPeople());
  }, [setIsLoading, setPeople, setTotalItems, dispatch]);

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
          {isLoading ? (
            <Loading />
          ) : (
            <ContextPaginationProvider>
              <List />
            </ContextPaginationProvider>
          )}
        </main>
      </div>
      <div id="detail" data-testid="details">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
