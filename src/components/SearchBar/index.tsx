import React from 'react';
// import Context from '../../Context';
import { SearchTermContext } from '../../App';

interface MyProps {
  updateData: (a: string) => void;
  onFormSubmit: (a: string) => void;
  searchTerm: string;
}
class SearchBar extends React.Component<MyProps> {
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
    if (this.props.searchTerm === 'boom') {
      throw new Error('BOOM');
    }
    return (
      <SearchTermContext.Consumer>
        {(searchTerm) => (
          <div className="search">
            <form onSubmit={this.handleSubmit}>
              <div className="search-field">
                <label className="search-label"></label>
                <input
                  className="search-input"
                  type="text"
                  onChange={this.handleChange}
                  // defaultValue={
                  //   localStorage.getItem('searchTerm') || this.props.searchTerm
                  // }
                  defaultValue={
                    localStorage.getItem('searchTerm') || searchTerm
                  }
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
        )}
      </SearchTermContext.Consumer>
    );
  }
}

export default SearchBar;
