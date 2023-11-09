import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';

import './styles.css';
import Pagination from '../Pagination';
import SearchContext from '../../context';
import '../../App.css';

const List: React.FC = () => {
  const navigate = useNavigate();

  const context = useContext(SearchContext);
  const { people } = context;

  const handleCardClick = (id: number) => navigate(`/details/${id}`);

  return (
    <div className="list">
      {people?.length ? (
        <ul className="cards">
          {people?.map((p, index) => (
            <li key={p.name} onClick={() => handleCardClick(index + 1)}>
              <ListItem item={p} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="list-warning-text">
          Oops, there are no people with that name
        </p>
      )}
      <Pagination />
    </div>
  );
};

export default List;
