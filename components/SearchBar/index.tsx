import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/store';
import { changeInput } from '../../store/search/searchSlice';
import { getSearchValue } from '../../store/search/searchSelectors';
import { useLazyGetPeopleByNameQuery } from '../../store/services/people';
import { getCurrentPage } from '../../store/pagination/paginationSelectors';
import { setStorageByKey } from '../../utils/storage';
import './styles.css';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  const [trigger] = useLazyGetPeopleByNameQuery();

  const currentPage = useAppSelector(getCurrentPage);
  const searchTerm = useAppSelector(getSearchValue);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>
    event.preventDefault();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(event.target.value));
  };

  const handleClick = () => {
    const url = new URLSearchParams();
    url.append('page', currentPage?.toString() || '1');
    // navigate({
    //   pathname,
    //   search: url.toString(),
    // });

    trigger({ searchTerm, currentPage });
    setStorageByKey('searchTerm', searchTerm);
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div>
          <input
            className="search-input"
            type="text"
            onChange={handleChange}
            defaultValue={searchTerm}
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
