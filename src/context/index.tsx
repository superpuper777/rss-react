import React, { Component } from 'react';
import { PeopleItem } from '../components/List/ListItem/type';

export interface State {
  searchTerm: string;
  people: Array<PeopleItem>;
  isError: boolean;
}

export type ContextType = State & {
  updateData: (value: string) => void;
  updateError: () => void;
  onTermSubmit: (searchTerm: string) => void;
};

const SearchContext = React.createContext<ContextType>({} as ContextType);

export class ContextProvider extends Component<
  { children: React.ReactNode },
  State
> {
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

  render() {
    const { children } = this.props;
    const { people, searchTerm, isError } = this.state;
    const { updateData, updateError, onTermSubmit } = this;

    return (
      <SearchContext.Provider
        value={{
          people,
          searchTerm,
          isError,
          updateData,
          updateError,
          onTermSubmit,
        }}
      >
        {children}
      </SearchContext.Provider>
    );
  }
}

export default SearchContext;
