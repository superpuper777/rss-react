import { useContext } from 'react';
import ListItem from './ListItem';

import SearchContext from '../../context';
import './styles.css';
import '../../App.css';
const List: React.FC = () => {
  const context = useContext(SearchContext);
  const { people } = context;

  return (
    <div className="list">
      {people?.length ? (
        <ul className="cards">
          {people?.map((p) => (
            <li key={p.name}>
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
