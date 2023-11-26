import { useRouter } from 'next/router';
import { useGetPeopleByNameQuery } from '../../../store/services/people';
import { getSearchValue } from '../../../store/search/searchSelectors';
import { getCurrentPage } from '../../../store/pagination/paginationSelectors';
import { useAppSelector } from '../../../store/store';

import Loading from '../../../components/Loading';
import styles from './styles.module.css';

const Details: React.FC = () => {
  const router = useRouter();
  const id = router.query.id;

  const currentPage = useAppSelector(getCurrentPage);
  const searchTerm = useAppSelector(getSearchValue);

  const { data, isLoading } = useGetPeopleByNameQuery({
    searchTerm,
    currentPage,
  });

  const info = data?.results[Number(id) - 1];

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
  } = info || {};

  const handleClose = () => {
    //   navigate('/');
    router.push('/');
  };

  return (
    <div className={styles.details}>
      <h1>Details</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <h2>
            <b data-testid="card-name">{name}</b>
          </h2>
          <div className={styles.containerGroup}>
            <p>
              Height:{' '}
              <span className={styles.detailsIinfo} data-testid="card-height">
                {height}
              </span>
            </p>
            <p>
              Mass:{' '}
              <span className={styles.detailsInfo} data-testid="card-mass">
                {mass}
              </span>
            </p>
          </div>
          <div className={styles.containerGroup}>
            <p>
              Hair color:{' '}
              <span
                className={styles.detailsInfo}
                data-testid="card-hair_color"
              >
                {hair_color}
              </span>
            </p>
            <p>
              Skin color:{' '}
              <span
                className={styles.detailsInfo}
                data-testid="card-skin_color"
              >
                {skin_color}
              </span>
            </p>
            <p>
              Eye color:{' '}
              <span className={styles.detailsInfo} data-testid="card-eye_color">
                {eye_color}
              </span>
            </p>
          </div>
          <div className={styles.containerGroup}>
            <p>
              Birthday:{' '}
              <span
                className={styles.detailsInfo}
                data-testid="card-birth_year"
              >
                {birth_year}
              </span>
            </p>
            <p>
              Gender:{' '}
              <span className={styles.detailsInfo} data-testid="card-gender">
                {gender}
              </span>
            </p>
          </div>

          <p>
            Homeworld:{' '}
            <span className={styles.detailsInfo} data-testid="card-homeworld">
              <a href={homeworld}>{homeworld}</a>
            </span>
          </p>
        </div>
      )}

      <button onClick={handleClose} data-testid="close-button">
        Close
      </button>
    </div>
  );
};

export default Details;
