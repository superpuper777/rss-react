import React from 'react';
import ListItem from './ListItem';
import { PeopleItem } from './ListItem/type';

import SearchContext from '../../context';
import './styles.css';
import '../../App.css';

class List extends React.Component {
  static contextType = SearchContext;
  context!: React.ContextType<typeof SearchContext>;

  render() {
    const { people } = this.context;

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
  }
}

export default List;
