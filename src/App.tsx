import React from 'react';
import './App.css';

import List from './components/List';
import SearchBar from './components/SearchBar';

interface Props {}
interface State {
  searchTerm: string;
  people: Array<Record<string, string>>;
  isError: boolean;
}
export const SearchTermContext = React.createContext('');
class App extends React.Component<Props, State> {
  state = {
    searchTerm: '',
    people: [],
    isError: false,
  };

  updateData = (value: string) => {
    this.setState({ searchTerm: value });
  };

  onTermSubmit = async (searchTerm: string) => {
    const API = `https://swapi.dev/api/people/?search=${searchTerm}`;
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ people: data.results }));
  };

  handleClick = () => {
    this.setState({ isError: true });
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
      <div>
        <SearchTermContext.Provider value={this.state.searchTerm}>
          <SearchBar
            onFormSubmit={this.onTermSubmit}
            updateData={this.updateData}
            searchTerm={searchTerm}
          />
          <List items={people} />
          <button
            className="search-button"
            type="submit"
            onClick={this.handleClick}
          >
            Crash app
          </button>
        </SearchTermContext.Provider>
      </div>
    );
  }
}

export default App;
