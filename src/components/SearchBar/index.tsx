import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchContext from '../../context';
import { getStorageByKey, setStorageByKey } from '../../utils/storage';
import './styles.css';
// import PaginationContext from '../../context/paginationContext';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { changeInput } from '../../store/search/searchSlice';
import { getSearchValue } from '../../store/search/searchSelectors';
import { useLazyGetPeopleByNameQuery } from '../../store/services/people';
import { getCurrentPage } from '../../store/pagination/paginationSelectors';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(getSearchValue);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const context = useContext(SearchContext);
  const { updateData } = context;
  // const pagContext = useContext(PaginationContext);
  // const { currentPage } = pagContext;
  //[trigger, result, lastPromiseInfo]
  const [trigger] = useLazyGetPeopleByNameQuery();
  const searchTerm = useAppSelector(getSearchValue);
  const currentPage = useAppSelector(getCurrentPage);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>
    event.preventDefault();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateData(event.target.value);
    dispatch(changeInput({ value: event.target.value }));
  };

  const handleClick = () => {
    const url = new URLSearchParams();
    url.append('page', currentPage?.toString() || '1');
    navigate({
      pathname,
      search: url.toString(),
    });
    // onTermSubmit(searchTerm, currentPage || 1);
    trigger({ searchTerm, currentPage });
    setStorageByKey('searchTerm', searchTerm);
  };

  const currentSearchTerm = getStorageByKey('searchTerm');

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div>
          <input
            className="search-input"
            type="text"
            onChange={handleChange}
            //|| searchTerm
            defaultValue={currentSearchTerm || inputValue}
            placeholder="Enter name"
          />
        </div>
        <button className="search-button" type="submit" onClick={handleClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
