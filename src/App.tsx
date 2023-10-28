import React from 'react';
import './App.css';

import List from './components/List';
import SearchBar from './components/SearchBar';

interface MyProps {}
interface MyState {
  searchTerm: string;
  people: Array<Record<string, string>>;
}
export const SearchTermContext = React.createContext('');
class App extends React.Component<MyProps, MyState> {
  state = {
    searchTerm: '',
    people: [],
  };

  updateData = (value: string) => {
    this.setState({ searchTerm: value });
  };

  onTermSubmit = async (searchTerm: string) => {
    ////&page=
    const API = `https://swapi.dev/api/people/?search=${searchTerm}`;
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ people: data.results }));
  };

  componentDidMount() {
    this.onTermSubmit(localStorage.getItem('searchTerm') || '');
  }

  render() {
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
        </SearchTermContext.Provider>
      </div>
    );
  }
}

export default App;
