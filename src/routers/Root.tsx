import { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import '../App.css';

import SearchContext from '../context';
import { ContextPaginationProvider } from '../context/paginationContext';
// import { fetchPeopleBySearchTerm } from '../api';
import List from '../components/List';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import CrashButton from '../components/CrashButton';
import { getPeople } from '../store/people/peopleSelectors';
import { getSearchValue } from '../store/search/searchSelectors';
import { getCurrentPage } from '../store/pagination/paginationSelectors';
// import { fetchPeople } from '../store/people/peopleSlice';
// useAppDispatch,
import { useAppSelector } from '../store/store';
// import { getStorageByKey } from '../utils/storage';
import { useGetPeopleByNameQuery } from '../store/services/people';
// import { useLazyGetPeopleByNameQuery } from '../store/services/people';

const Root = (): JSX.Element => {
  // const dispatch = useAppDispatch();
  const context = useContext(SearchContext);
  const people = useAppSelector(getPeople);
  const searchTerm = useAppSelector(getSearchValue);
  const currentPage = useAppSelector(getCurrentPage);
  // const count = useAppSelector((state) => state.rootReducer.search.value);

  console.log(people, searchTerm, currentPage);
  const { isError, isLoading } = context;

  const { pathname } = useLocation();
  const isDetailsShowed = pathname?.includes('details');
  const { data, error } = useGetPeopleByNameQuery({ searchTerm, currentPage });
  console.log(data?.results, error, isLoading);

  // useEffect(() => {
  //   setIsLoading(true);

  //   fetchPeopleBySearchTerm(
  //     (getStorageByKey('searchTerm') as string) && '',
  //     1
  //   ).then((data) => {
  //     setPeople(data.results);
  //     setTotalItems(data.count);
  //     setIsLoading(false);
  //   });
  //   dispatch(fetchPeople());
  // }, [setIsLoading, setPeople, setTotalItems, dispatch]);

  if (isError) {
    throw new Error('I crashed!');
  }

  return (
    <div
      className={isDetailsShowed ? 'app-wrapper-with-details' : 'app-wrapper'}
    >
      <div className="app" data-testid="app">
        <header className="header">
          <CrashButton />
          <SearchBar />
        </header>
        <main>
          {isLoading ? (
            <Loading />
          ) : (
            <ContextPaginationProvider>
              <List />
            </ContextPaginationProvider>
          )}
        </main>
      </div>
      <div id="detail" data-testid="details">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
