import { useGetPeopleByNameQuery } from '../../store/services/people';
import { getSearchValue } from '../../store/search/searchSelectors';
import { getCurrentPage } from '../../store/pagination/paginationSelectors';
import { useAppSelector } from '../../store/store';

import Loading from '../../components/Loading';
import '../components/Detail/style.css';

const Details: React.FC = () => {
  //   const navigate = useNavigate();
  //   const params = useParams();
  const id = 2;
  //   const id = params?.peopleId as string;
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
    console.log('navigate /');
  };

  return (
    <div className="details">
      <h1>Details</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <h2>
            <b data-testid="card-name">{name}</b>
          </h2>
          <div className="container-group">
            <p>
              Height:{' '}
              <span className="details-info" data-testid="card-height">
                {height}
              </span>
            </p>
            <p>
              Mass:{' '}
              <span className="details-info" data-testid="card-mass">
                {mass}
              </span>
            </p>
          </div>
          <div className="container-group">
            <p>
              Hair color:{' '}
              <span className="details-info" data-testid="card-hair_color">
                {hair_color}
              </span>
            </p>
            <p>
              Skin color:{' '}
              <span className="details-info" data-testid="card-skin_color">
                {skin_color}
              </span>
            </p>
            <p>
              Eye color:{' '}
              <span className="details-info" data-testid="card-eye_color">
                {eye_color}
              </span>
            </p>
          </div>
          <div className="container-group">
            <p>
              Birthday:{' '}
              <span className="details-info" data-testid="card-birth_year">
                {birth_year}
              </span>
            </p>
            <p>
              Gender:{' '}
              <span className="details-info" data-testid="card-gender">
                {gender}
              </span>
            </p>
          </div>

          <p>
            Homeworld:{' '}
            <span className="details-info" data-testid="card-homeworld">
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
