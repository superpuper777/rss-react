// import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useRouter } from 'next/router';
import { changePage } from '../../store/pagination/paginationSlice';
import {
  getCurrentPage,
  getItemsPerPage,
} from '../../store/pagination/paginationSelectors';
import { getSearchValue } from '../../store/search/searchSelectors';
import {
  useGetPeopleByNameQuery,
  useLazyGetPeopleByNameQuery,
} from '../../store/services/people';
import styles from './styles.module.css';

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const currentPage = useAppSelector(getCurrentPage);
  const searchTerm = useAppSelector(getSearchValue);
  const itemsPerPage = useAppSelector(getItemsPerPage);

  const [trigger] = useLazyGetPeopleByNameQuery();

  const { data } = useGetPeopleByNameQuery({
    searchTerm,
    currentPage,
  });

  const totalItems = data?.count || 0;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number: number) => {
    dispatch(changePage(number));
    const url = new URLSearchParams();
    trigger({ searchTerm, currentPage });
    url.append('page', number.toString());
    router.push({
      pathname: '/',
      search: url.toString(),
      // query: {  },
    });
  };

  return (
    <div>
      <nav>
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <li key={number} className={styles.pageItem}>
              <a onClick={() => handleClick(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
