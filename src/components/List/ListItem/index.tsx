import React from 'react';

import { PeopleItem } from './type';
import './styles.css';

interface Props {
  item: PeopleItem;
}
class ListItem extends React.Component<Props> {
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <div className="container">
          <h4>
            <b>{item.name}</b>
          </h4>
          <p>
            Height: <span className="card-info">{item.height}</span>
          </p>
          <p>
            Birthday: <span className="card-info">{item.birth_year}</span>
          </p>
          <p>
            Gender: <span className="card-info">{item.gender}</span>
          </p>
          <p>
            Homeworld:{' '}
            <span className="card-info">
              <a href={item.homeworld}>{item.homeworld}</a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default ListItem;
