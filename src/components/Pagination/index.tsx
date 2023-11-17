import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaginationContext from '../../context/paginationContext';
import { useAppDispatch } from '../../store/store';
import { changePage } from '../../store/pagination/paginationSlice';

import './styles.css';
import SearchContext from '../../context';

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pagContext = useContext(PaginationContext);
  const { itemsPerPage, setCurrentPage } = pagContext;

  const context = useContext(SearchContext);
  const { totalItems, onTermSubmit, searchTerm } = context;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number: number) => {
    setCurrentPage(number);
    dispatch(changePage({ currentPage: number }));
    const url = new URLSearchParams();
    onTermSubmit(searchTerm, number);
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
