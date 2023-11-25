import { PeopleItem } from './type';
import styles from './styles.module.css';

interface Props {
  item: PeopleItem;
}
const ListItem: React.FC<Props> = ({ item }: Props) => {
  return (
    <div className={styles.card} data-testid="card">
      <div className={styles.container}>
        <h4>
          <b data-testid="card-name">{item.name}</b>
        </h4>
        <p>
          Height:{' '}
          <span className={styles.cardInfo} data-testid="card-height">
            {item.height}
          </span>
        </p>
        <p>
          Birthday:{' '}
          <span className={styles.cardInfo} data-testid="card-birth_year">
            {item.birth_year}
          </span>
        </p>
        <p>
          Gender:{' '}
          <span className={styles.cardInfo} data-testid="card-gender">
            {item.gender}
          </span>
        </p>
        <p>
          Homeworld:{' '}
          <span className={styles.cardInfo} data-testid="card-homeworld">
            <a href={item.homeworld}>{item.homeworld}</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ListItem;
