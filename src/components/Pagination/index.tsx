import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';

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
import './styles.css';

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();
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
    navigate({
      pathname,
      search: url.toString(),
    });
  };

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
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
