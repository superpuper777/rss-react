import { fetchPeopleBySearchTerm } from '../../api';

export const peopleResponse = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      birth_year: '19BBY',
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      eye_color: 'blue',
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/6/',
      ],
      gender: 'male',
      hair_color: 'blond',
      height: '172',
      homeworld: 'https://swapi.dev/api/planets/1/',
      mass: '77',
      name: 'Luke Skywalker',
      skin_color: 'fair',
      species: [],
      starships: [
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/22/',
      ],
      url: 'https://swapi.dev/api/people/1/',
      vehicles: [
        'https://swapi.dev/api/vehicles/14/',
        'https://swapi.dev/api/vehicles/30/',
      ],
    },
  ],
};

const page = 1;
const searchTerm = 'Luke';

export async function getPeople() {
  return fetchPeopleBySearchTerm(searchTerm, page).then((r) => r);
}

export const item = {
  birth_year: '47BBY',
  created: '2014-12-10T15:53:41.121000Z',
  edited: '2014-12-20T21:17:50.319000Z',
  eye_color: 'blue',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  gender: 'female',
  hair_color: 'brown',
  height: '165',
  homeworld: 'https://swapi.dev/api/planets/1/',
  mass: '75',
  name: 'Beru Whitesun lars',
  skin_color: 'light',
  species: [],
  starships: [],
  url: 'https://swapi.dev/api/people/7/',
  vehicles: [],
};

// const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
//   window.history.pushState({}, 'Test page', route);

//   return {
//     user: userEvent.setup(),
//     ...render(ui, { wrapper: BrowserRouter }),
//   };
// };
