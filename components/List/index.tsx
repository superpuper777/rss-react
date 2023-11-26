import { useRouter } from 'next/router';
import { useAppSelector, wrapper } from '../../store/store';
import { getSearchValue } from '../../store/search/searchSelectors';
import {
  useGetPeopleByNameQuery,
  useLazyGetPeopleByNameQuery,
  getPeopleByName,
  getRunningQueriesThunk,
} from '../../store/services/people';
import { getCurrentPage } from '../../store/pagination/paginationSelectors';

import ListItem from './ListItem';
import Pagination from '../Pagination';
import Loading from '../Loading';
import styles from './styles.module.css';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const currentPage = useAppSelector(getCurrentPage);
    const searchTerm = useAppSelector(getSearchValue);

    store.dispatch(getPeopleByName.initiate({ searchTerm, currentPage }));

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);

const List: React.FC = () => {
  const router = useRouter();
  const [trigger] = useLazyGetPeopleByNameQuery();

  const currentPage = useAppSelector(getCurrentPage);
  const searchTerm = useAppSelector(getSearchValue);

  const handleCardClick = (id: number) => {
    trigger({ searchTerm, currentPage });
    router.push(`/details/${id}`);
  };

  const { data, isLoading } = useGetPeopleByNameQuery({
    searchTerm,
    currentPage,
  });

  const people = data?.results;
  return (
    <div className={styles.list} data-testid="list">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div data-testid={styles.cardCount}>{people?.length}</div>
          {people?.length ? (
            <ul className={styles.cards}>
              {people?.map((p, index) => (
                <li key={p.name} onClick={() => handleCardClick(index + 1)}>
                  <ListItem item={p} />
                </li>
              ))}
            </ul>
          ) : (
            <p
              className={styles.listWarningText}
              data-testid="list-warning-text"
            >
              Oops, there are no people with that name
            </p>
          )}

          <Pagination />
        </>
      )}
    </div>
  );
};

export default List;
