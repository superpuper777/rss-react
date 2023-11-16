import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchContext from '../../context';
import { getStorageByKey, setStorageByKey } from '../../utils/storage';
import './styles.css';
import PaginationContext from '../../context/paginationContext';
import { useAppDispatch } from '../../store/store';
import { changeInput } from '../../store/search/searchSlice';
import { getSearchValue } from '../../store/search/searchSelectors';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const inputValue = useSelector(getSearchValue);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const context = useContext(SearchContext);
  const { searchTerm, onTermSubmit, updateData } = context;
  const pagContext = useContext(PaginationContext);
  const { currentPage } = pagContext;
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
    onTermSubmit(searchTerm, currentPage || 1);
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
