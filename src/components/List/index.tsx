import React from 'react';

const searchTerm = '';
// const LIMIT = 50;
// const OFFSET = '0';
//&page=
// const API = `https://pokeapi.co/api/v2/pokemon/${searchTerm}?limit=${LIMIT}&offset=${OFFSET}`;
const API = `https://swapi.dev/api/people/?search=${searchTerm}`;

interface MyProps {}
interface MyState {
  people: Array<Record<string, string>>;
}
class List extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ people: data.results }));
  }
  render() {
    const { people } = this.state;

    return (
      <ul>
        {people.map((p) => (
          <li key={p.name}>
            <a href={p.url}>{p.name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
