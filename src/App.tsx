import { useContext, useEffect } from 'react';
import './App.css';

import List from './components/List';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';
import CrashButton from './components/CrashButton';
import SearchContext from './context';
import { fetchPeople, fetchPeopleBySearchTerm } from './api';
import { getStorageByKey } from './utils/storage';

const App = () => {
  const context = useContext(SearchContext);
  const { setPeople, isError, isLoading, setIsLoading, searchTerm } = context;

  useEffect(() => {
    setIsLoading(true);

    if (searchTerm === '') {
      fetchPeople().then((data) => {
        setPeople(data.results);
        setIsLoading(false);
      });
    } else
      fetchPeopleBySearchTerm(searchTerm).then((data) => {
        setPeople(data.results);
        setIsLoading(false);
      });
  }, []);

  if (isError) {
    throw new Error('I crashed!');
  }

  return (
    <div className="app">
      <header className="header">
        <CrashButton />
        <SearchBar />
      </header>
      <main>{isLoading ? <Loading /> : <List />}</main>
    </div>
  );
};

export default App;
