import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css';

import List from '../components/List';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import CrashButton from '../components/CrashButton';
import SearchContext from '../context';
import { fetchPeopleBySearchTerm } from '../api';
import { getStorageByKey } from '../utils/storage';
import { ContextPaginationProvider } from '../context/paginationContext';

const Root = (): JSX.Element => {
  const context = useContext(SearchContext);

  const { setPeople, isError, isLoading, setIsLoading, setTotalItems } =
    context;

  useEffect(() => {
    setIsLoading(true);

    fetchPeopleBySearchTerm(
      '' || (getStorageByKey('searchTerm') as string),
      1
    ).then((data) => {
      setPeople(data.results);
      setTotalItems(data.count);
      setIsLoading(false);
    });
  }, [setIsLoading, setPeople, setTotalItems]);

  if (isError) {
    throw new Error('I crashed!');
  }

  return (
    <div className="app-wrapper">
      <div className="app">
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
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
