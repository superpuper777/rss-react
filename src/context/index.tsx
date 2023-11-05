import React, { createContext, useContext, useState } from 'react';
import { PeopleItem } from '../components/List/ListItem/type';
import { getStorageByKey } from '../utils/storage';
import { fetchPeopleBySearchTerm } from '../api';
import PaginationContext from './paginationContext';
export interface State {
  searchTerm: string;
  people: Array<PeopleItem>;
  isError: boolean;
  isLoading: boolean;
  setIsLoading: (param: boolean) => void;
  setPeople: (param: Array<PeopleItem>) => void;
}

export type ContextType = State & {
  updateData: (value: string) => void;
  updateError: () => void;
  onTermSubmit: (searchTerm: string) => void;
};

type Props = {
  children: React.ReactNode;
};

const SearchContext = createContext<ContextType>({} as ContextType);

export const ContextProvider = ({ children }: Props) => {
  const context = useContext(PaginationContext);
  const { currentPage, setTotalItems } = context;
  const [searchTerm, setSearchTerm] = useState<string>(
    getStorageByKey('searchTerm') || ''
  );
  const [people, setPeople] = useState<Array<PeopleItem>>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateData = (value: string) => {
    setSearchTerm(value);
  };

  const updateError = () => {
    setIsError(true);
  };

  const onTermSubmit = async (searchTerm: string) => {
    setIsLoading(true);
    fetchPeopleBySearchTerm(searchTerm, currentPage).then((data) => {
      setPeople(data.results);
      setTotalItems(data.count);
      setIsLoading(false);
    });
  };

  return (
    <SearchContext.Provider
      value={{
        people,
        searchTerm,
        isError,
        updateData,
        updateError,
        onTermSubmit,
        isLoading,
        setPeople,
        setIsLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
