import React from 'react';
import './styles.css';

interface Props {
  updateData: (a: string) => void;
  onFormSubmit: (a: string) => void;
  searchTerm: string;
}
class SearchBar extends React.Component<Props> {
  handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>
    event.preventDefault();

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateData(event.target.value);
  };

  handleClick = () => {
    this.props.onFormSubmit(this.props.searchTerm);
    localStorage.setItem('searchTerm', this.props.searchTerm);
  };

  render() {
    return (
      <div className="search">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div>
            <input
              className="search-input"
              type="text"
              onChange={this.handleChange}
              defaultValue={
                localStorage.getItem('searchTerm') || this.props.searchTerm
              }
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
