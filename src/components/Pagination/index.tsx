import { useContext } from 'react';
import PaginationContext from '../../context/paginationContext';
import './styles.css';

const Pagination: React.FC = () => {
  const context = useContext(PaginationContext);
  const { itemsPerPage, totalItems, setCurrentPage } = context;
  console.log(totalItems);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (number: number) => setCurrentPage(number);

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
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
