import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchContext from '../../context';
import { getStorageByKey, setStorageByKey } from '../../utils/storage';
import './styles.css';
import PaginationContext from '../../context/paginationContext';

const SearchBar: React.FC = () => {
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
  };

  const handleClick = () => {
    const url = new URLSearchParams();
    url.append('page', currentPage.toString());
    navigate({
      pathname,
      search: url.toString(),
    });
    onTermSubmit(searchTerm, currentPage);
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
            defaultValue={currentSearchTerm || searchTerm}
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
