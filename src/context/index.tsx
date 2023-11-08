import React, { createContext, useState } from 'react';
import { PeopleItem } from '../components/List/ListItem/type';
import { getStorageByKey } from '../utils/storage';
import { fetchPeopleBySearchTerm } from '../api';

export interface State {
  searchTerm: string;
  people: Array<PeopleItem>;
  isError: boolean;
  isLoading: boolean;
  setIsLoading: (param: boolean) => void;
  setPeople: (param: Array<PeopleItem>) => void;
  totalItems: number;
  setTotalItems: (param: number) => void;
}

export type ContextType = State & {
  updateData: (value: string) => void;
  updateError: () => void;
  onTermSubmit: (searchTerm: string, currentPage: number) => void;
};

type Props = {
  children: React.ReactNode;
};

const SearchContext = createContext<ContextType>({} as ContextType);

export const ContextProvider = ({ children }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>(
    getStorageByKey('searchTerm') || ''
  );
  const [people, setPeople] = useState<Array<PeopleItem>>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState(0);

  const updateData = (value: string) => {
    setSearchTerm(value);
  };

  const updateError = () => {
    setIsError(true);
  };

  const onTermSubmit = async (searchTerm: string, currentPage: number) => {
    setIsLoading(true);
    fetchPeopleBySearchTerm(searchTerm, currentPage).then((data) => {
      setTotalItems(data.count);
      setPeople(data.results);
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
        totalItems,
        setTotalItems,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
