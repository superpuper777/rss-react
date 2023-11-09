import { useContext } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import ListItem from './ListItem';

import './styles.css';
import Pagination from '../Pagination';
import SearchContext from '../../context';
import '../../App.css';

const List: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const context = useContext(SearchContext);
  const { people } = context;
  console.log(pathname);

  const handleCardClick = (event: React.MouseEvent<HTMLElement>) =>
    console.log(event.currentTarget);
  // const handleCardClick = (id: number) => navigate(`${pathname}details/${id}`);
  // () => handleCardClick(index + 1)
  // const handleCardClick = (id: number) =>
  //   navigate(`${pathname}details/${id}`, { replace: true });
  // () => handleCardClick(index + 1)
  const params = useParams();
  console.log(params); // "hotspur"
  return (
    <div className="list">
      <Pagination />
      {people?.length ? (
        <ul className="cards">
          {people?.map((p, index) => (
            <li key={p.name} onClick={handleCardClick}>
              <Link to={`details/1`}>Your Name</Link>
              <ListItem item={p} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="list-warning-text">
          Oops, there are no people with that name
        </p>
      )}
    </div>
  );
};

export default List;
