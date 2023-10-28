import React from 'react';
import './App.css';

import List from './components/List';
import SearchBar from './components/SearchBar';

interface MyProps {}
interface MyState {
  searchTerm: string;
  people: Array<Record<string, string>>;
}

const SearchTermContext = React.createContext({});
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
    this.onTermSubmit('');
  }

  render() {
    const { people } = this.state;
    console.log(people);
    return (
      <div>
        <SearchTermContext.Provider value={this.state}>
          <SearchBar
            onFormSubmit={this.onTermSubmit}
            updateData={this.updateData}
          />
          <List items={this.state.people} />
          <div>{this.state.searchTerm}</div>
        </SearchTermContext.Provider>
      </div>
    );
  }
}

export default App;
