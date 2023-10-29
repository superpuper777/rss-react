import React from 'react';
import ListItem from './ListItem';
import { PeopleItem } from './ListItem/type';

interface Props {
  items: Array<PeopleItem>;
}

class List extends React.Component<Props> {
  render() {
    const { items } = this.props;

    return (
      <ul className="list">
        {items.map((p) => (
          <li key={p.name}>
            <ListItem item={p} />
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
