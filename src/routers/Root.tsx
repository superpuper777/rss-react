import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css';

import List from '../components/List';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import CrashButton from '../components/CrashButton';
import SearchContext from '../context';
import { fetchPeople, fetchPeopleBySearchTerm } from '../api';
import { ResponseData } from '../api/dto';

const Root = (): JSX.Element => {
  const context = useContext(SearchContext);
  const { setPeople, isError, isLoading, setIsLoading, searchTerm } = context;

  useEffect(() => {
    const fetchingActions = (data: ResponseData) => {
      setPeople(data.results);
      setIsLoading(false);
    };
    setIsLoading(true);
    if (searchTerm === '') {
      fetchPeople().then((data) => fetchingActions(data));
    } else
      fetchPeopleBySearchTerm(searchTerm).then((data) => fetchingActions(data));
  }, [searchTerm, setIsLoading, setPeople]);

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
        <main>{isLoading ? <Loading /> : <List />}</main>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
