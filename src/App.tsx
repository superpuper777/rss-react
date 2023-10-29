import React from 'react';
import './App.css';

import List from './components/List';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';
import CrashButton from './components/CrashButton';

interface State {
  searchTerm: string;
  people: Array<Record<string, string>>;
  isError: boolean;
}
export const SearchTermContext = React.createContext('');
class App extends React.Component<State> {
  state = {
    searchTerm: '',
    people: [],
    isError: false,
  };

  updateData = (value: string) => {
    this.setState({ searchTerm: value });
  };

  updateError = () => {
    this.setState({ isError: true });
  };

  onTermSubmit = async (searchTerm: string) => {
    const API = `https://swapi.dev/api/people/?search=${searchTerm}`;
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ people: data.results }));
  };

  componentDidMount() {
    this.onTermSubmit(localStorage.getItem('searchTerm') || '');
  }

  render() {
    if (this.state.isError) {
      throw new Error('I crashed!');
    }
    const { people, searchTerm } = this.state;

    return (
      <div className="app">
        <header className="header">
          <CrashButton updateError={this.updateError} />
          <SearchBar
            onFormSubmit={this.onTermSubmit}
            updateData={this.updateData}
            searchTerm={searchTerm}
          />
        </header>
        {people.length ? (
          <main>
            <List items={people} />
          </main>
        ) : (
          <main>
            <Loading />
          </main>
        )}
      </div>
    );
  }
}

export default App;
