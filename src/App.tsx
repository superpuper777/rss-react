import React from 'react';
import './App.css';

import List from './components/List';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';
import CrashButton from './components/CrashButton';
import SearchContext from './context';
import { getStorageByKey } from './utils/storage';

class App extends React.Component {
  static contextType = SearchContext;
  context!: React.ContextType<typeof SearchContext>;

  componentDidMount() {
    const { onTermSubmit } = this.context;

    onTermSubmit(getStorageByKey('searchTerm') || '');
  }

  render() {
    const { people, isError } = this.context;

    if (isError) {
      throw new Error('I crashed!');
    }

    return (
      <div className="app">
        <header className="header">
          <CrashButton />
          <SearchBar />
        </header>
        <main>{people.length ? <List /> : <Loading />}</main>
      </div>
    );
  }
}

export default App;
