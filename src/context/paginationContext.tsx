import React, { createContext, useState } from 'react';

export interface State {
  currentPage: number;
  setCurrentPage: (param: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (param: number) => void;
  nextPage: string;
  setNextPage: (param: string) => void;
  prevPage: string;
  setPrevPage: (param: string) => void;
}

export type ContextType = State;

type Props = {
  children: React.ReactNode;
};

const PaginationContext = createContext<ContextType>({} as ContextType);

export const ContextPaginationProvider = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        nextPage,
        setNextPage,
        prevPage,
        setPrevPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
