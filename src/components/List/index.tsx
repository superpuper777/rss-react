import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';

import './styles.css';
import Pagination from '../Pagination';
import SearchContext from '../../context';
import '../../App.css';
import { getStorageByKey } from '../../utils/storage';

const List: React.FC = () => {
  const navigate = useNavigate();

  const context = useContext(SearchContext);
  const { people, onTermSubmit } = context;

  const handleCardClick = (id: number) => {
    onTermSubmit((getStorageByKey('searchTerm') as string) && '', 1);
    navigate(`/details/${id}`);
  };

  return (
    <div className="list" data-testid="list">
      <div data-testid="card-count">{people?.length}</div>
      {people?.length ? (
        <ul className="cards">
          {people?.map((p, index) => (
            <li key={p.name} onClick={() => handleCardClick(index + 1)}>
              <ListItem item={p} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="list-warning-text" data-testid="list-warning-text">
          Oops, there are no people with that name
        </p>
      )}
      <Pagination />
    </div>
  );
};

export default List;
