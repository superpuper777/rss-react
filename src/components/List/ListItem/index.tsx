import { PeopleItem } from './type';
import './styles.css';

interface Props {
  item: PeopleItem;
}
const ListItem: React.FC<Props> = ({ item }: Props) => {
  return (
    <div className="card" data-testid="card">
      <div className="container">
        <h4>
          <b data-testid="card-name">{item.name}</b>
        </h4>
        <p>
          Height:{' '}
          <span className="card-info" data-testid="card-height">
            {item.height}
          </span>
        </p>
        <p>
          Birthday:{' '}
          <span className="card-info" data-testid="card-birth_year">
            {item.birth_year}
          </span>
        </p>
        <p>
          Gender:{' '}
          <span className="card-info" data-testid="card-gender">
            {item.gender}
          </span>
        </p>
        <p>
          Homeworld:{' '}
          <span className="card-info" data-testid="card-homeworld">
            <a href={item.homeworld}>{item.homeworld}</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ListItem;
