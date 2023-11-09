import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SearchContext from '../context';
import '../components/Detail/style.css';

const Details: React.FC = () => {
  const navigate = useNavigate();

  const context = useContext(SearchContext);
  const { people } = context;

  const params = useParams();
  const id = params?.peopleId as string;
  const currentItem = people[Number(id) - 1];

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
  } = currentItem;

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="details">
      <h1>Details</h1>
      <div className="container">
        <h2>
          <b>{name}</b>
        </h2>
        <div className="container-group">
          <p>
            Height: <span className="details-info">{height}</span>
          </p>
          <p>
            Mass: <span className="details-info">{mass}</span>
          </p>
        </div>
        <div className="container-group">
          <p>
            Hair color: <span className="details-info">{hair_color}</span>
          </p>
          <p>
            Skin color: <span className="details-info">{skin_color}</span>
          </p>
          <p>
            Eye color: <span className="details-info">{eye_color}</span>
          </p>
        </div>
        <div className="container-group">
          <p>
            Birthday: <span className="details-info">{birth_year}</span>
          </p>
          <p>
            Gender: <span className="details-info">{gender}</span>
          </p>
        </div>

        <p>
          Homeworld:{' '}
          <span className="details-info">
            <a href={homeworld}>{homeworld}</a>
          </span>
        </p>
      </div>

      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Details;
