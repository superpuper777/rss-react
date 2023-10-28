import React from 'react';
// import Context from '../../Context';

interface MyProps {
  updateData: (a: string) => void;
}
class SearchBar extends React.Component<MyProps> {
  state = { term: '' };
  handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>
    event.preventDefault();
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: event.target.value });
    this.props.updateData(event.target.value);
    console.log(event.target.value);
  };
  render() {
    return (
      // <Context.Consumer>
      //   {(value) => (
      //      value={value.term}
      //        )}
      //        </Context.Consumer>
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <div className="search-field">
            <label className="search-label"></label>
            <input
              className="search-input"
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
