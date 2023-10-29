import React from 'react';
import SearchContext from '../../context';
import { getStorageByKey, setStorageByKey } from '../../utils/storage';
import './styles.css';

class SearchBar extends React.Component {
  static contextType = SearchContext;
  context!: React.ContextType<typeof SearchContext>;

  handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>
    event.preventDefault();

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { updateData } = this.context;
    updateData(event.target.value);
  };

  handleClick = () => {
    const { onTermSubmit, searchTerm } = this.context;

    onTermSubmit(searchTerm);
    setStorageByKey('searchTerm', searchTerm);
  };

  render() {
    const { searchTerm } = this.context;
    const currentSearchTerm = getStorageByKey('searchTerm');

    return (
      <div className="search">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div>
            <input
              className="search-input"
              type="text"
              onChange={this.handleChange}
              defaultValue={currentSearchTerm || searchTerm}
              placeholder="Enter name"
            />
          </div>
          <button
            className="search-button"
            type="submit"
            onClick={this.handleClick}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
