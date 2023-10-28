import React from 'react';
import ListItem from './ListItem';
import { PeopleItem } from './ListItem/type';

interface MyProps {
  items: Array<PeopleItem>;
}
interface MyState {
  people: Array<Record<string, string>>;
}
class List extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  }

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
