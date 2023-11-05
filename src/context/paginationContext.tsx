import React, { createContext, useContext, useState } from 'react';
import { PeopleItem } from '../components/List/ListItem/type';
import SearchContext from '.';

export interface State {
  currentPage: number;
  setCurrentPage: (param: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (param: number) => void;
  currentItems: Array<PeopleItem>;
  totalItems: number;
  setTotalItems: (param: number) => void;
}

export type ContextType = State;

type Props = {
  children: React.ReactNode;
};

const PaginationContext = createContext<ContextType>({} as ContextType);

export const ContextPaginationProvider = ({ children }: Props) => {
  const context = useContext(SearchContext);
  const { people } = context;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(82);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = people.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        currentItems,
        totalItems,
        setTotalItems,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
