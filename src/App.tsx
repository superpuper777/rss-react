import React from 'react';
import './App.css';

import List from './components/List';
import SearchBar from './components/SearchBar';

interface MyProps {}
//  constructor(props: MyProps) {
//super(props);

const SearchTermContext = React.createContext({});
class App extends React.Component<MyProps> {
  state = {
    searchTerm: '',
  };

  updateData = (value: string) => {
    this.setState({ searchTerm: value });
    console.log(value);
  };

  render() {
    return (
      <div>
        <SearchTermContext.Provider value={this.state}>
          <SearchBar updateData={this.updateData} />
          <List />
          <div>{this.state.searchTerm}</div>
        </SearchTermContext.Provider>
      </div>
    );
  }
}

export default App;
