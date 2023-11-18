import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../store/store';
import { getSearchValue } from '../../store/search/searchSelectors';
import {
  useGetPeopleByNameQuery,
  useLazyGetPeopleByNameQuery,
} from '../../store/services/people';
import { getCurrentPage } from '../../store/pagination/paginationSelectors';

import ListItem from './ListItem';
import Pagination from '../Pagination';
import '../../App.css';
import './styles.css';

const List: React.FC = () => {
  const navigate = useNavigate();
  const [trigger] = useLazyGetPeopleByNameQuery();

  const currentPage = useAppSelector(getCurrentPage);
  const searchTerm = useAppSelector(getSearchValue);

  const handleCardClick = (id: number) => {
    trigger({ searchTerm, currentPage });
    navigate(`/details/${id}`);
  };

  const { data, error, isLoading } = useGetPeopleByNameQuery({
    searchTerm,
    currentPage,
  });
  console.log(data?.results, error, isLoading);
  const people = data?.results;
  return (
    <div className="list" data-testid="list">
      <div data-testid="card-count">{people?.length}</div>
      {people?.length ? (
        <ul className="cards">
          {people?.map((p, index) => (
            <li key={p.name} onClick={() => handleCardClick(+index + 1)}>
              <ListItem item={p} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="list-warning-text" data-testid="list-warning-text">
          Oops, there are no people with that name
        </p>
      )}
      <Pagination />
    </div>
  );
};

export default List;
