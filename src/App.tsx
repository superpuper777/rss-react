import { useContext, useEffect } from 'react';
import './App.css';

import List from './components/List';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';
import CrashButton from './components/CrashButton';
import SearchContext from './context';
import { getStorageByKey } from './utils/storage';

const App = () => {
  const context = useContext(SearchContext);
  const { onTermSubmit, isError, isLoading } = context;

  useEffect(() => {
    onTermSubmit(getStorageByKey('searchTerm') || '');
  }, [onTermSubmit]);

  if (isError) {
    throw new Error('I crashed!');
  }

  console.log(isLoading);
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
