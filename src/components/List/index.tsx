import React from 'react';
import ListItem from './ListItem';
import { PeopleItem } from './ListItem/type';

import './styles.css';
import '../../App.css';

interface Props {
  items: Array<PeopleItem>;
}

class List extends React.Component<Props> {
  render() {
    const { items } = this.props;

    return (
      <div className="list">
        <ul className="cards">
          {items.map((p) => (
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
