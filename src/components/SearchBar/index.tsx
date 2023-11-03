import React, { useContext } from 'react';
import SearchContext from '../../context';
import { getStorageByKey, setStorageByKey } from '../../utils/storage';
import './styles.css';

const SearchBar = () => {
  const context = useContext(SearchContext);
  const { searchTerm, onTermSubmit, updateData } = context;

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>
    event.preventDefault();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateData(event.target.value);
  };

  const handleClick = () => {
    onTermSubmit(searchTerm);
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
