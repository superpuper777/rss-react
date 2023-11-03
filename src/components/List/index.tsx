import { useContext } from 'react';
import ListItem from './ListItem';

import SearchContext from '../../context';
import './styles.css';
import '../../App.css';
const List = () => {
  const context = useContext(SearchContext);
  const { people } = context;

  return (
    <div className="list">
      <ul className="cards">
        {people.map((p) => (
          <li key={p.name}>
            <ListItem item={p} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
