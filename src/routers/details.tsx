import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SearchContext from '../context';
import '../components/Detail/style.css';
import { getStorageByKey } from '../utils/storage';

import { fetchPeopleBySearchTerm } from '../api';
import Loading from '../components/Loading';
import { PeopleItem } from '../components/List/ListItem/type';

const Details: React.FC = () => {
  const [person, setPerson] = useState<PeopleItem>({
    birth_year: '',
    created: '',
    edited: '',
    eye_color: '',
    films: [],
    gender: '',
    hair_color: '',
    height: '',
    homeworld: '',
    mass: '',
    name: '',
    skin_color: '',
    species: [],
    starships: [],
    url: '',
    vehicles: [],
  });
  const navigate = useNavigate();

  const context = useContext(SearchContext);
  const { setIsLoading, setPeople, people, isLoading } = context;

  const params = useParams();
  const id = params?.peopleId as string;

  useEffect(() => {
    setIsLoading(true);

    fetchPeopleBySearchTerm(
      (getStorageByKey('searchTerm') as string) && '',
      1
    ).then((data) => {
      setPeople(data.results);
      setPerson(data.results[Number(id) - 1]);
      setIsLoading(false);
    });
  }, [setIsLoading, setPeople, setPerson, id]);

  console.log(people, person);

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
  } = person;

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="details">
      <h1>Details</h1>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}

      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Details;
