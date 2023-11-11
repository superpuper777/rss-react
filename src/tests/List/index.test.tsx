import { render } from '@testing-library/react';
import { expect, test, vi, describe } from 'vitest';
import '@testing-library/jest-dom';
import List from '../../components/List';

const people = [
  {
    name: 'Owen Lars',
    height: '178',
    mass: '120',
    hair_color: 'brown, grey',
    skin_color: 'light',
    birth_year: '52BBY',
    created: '2014-12-10T15:52:14.024000Z',
    edited: '2014-12-20T21:17:50.317000Z',
    eye_color: 'blue',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    species: [],
    starships: [],
    url: 'https://swapi.dev/api/people/6/',
    vehicles: [],
  },
  {
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
  },
];

const peopleEmptyArray = [];
const mockUsedNavigate = vi.fn();
const mockUsedLocation = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  )),
  useNavigate: () => mockUsedNavigate,
  useLocation: () => mockUsedLocation,
}));

describe('testing List Component', () => {
  test('renders the specified number of cards', () => {
    const { getByTestId } = render(<List />);
    const count = getByTestId('card-count');
    expect(count).toBeDefined();
    expect(people.length).toBe(2);
  });
  test('an appropriate message is displayed if no cards are present', () => {
    const { getByTestId } = render(<List />);
    const warningText = getByTestId('list-warning-text');
    expect(peopleEmptyArray.length).toBe(0);
    expect(warningText).toHaveTextContent(
      'Oops, there are no people with that name'
    );
    expect(warningText).toBeInTheDocument();
  });
});
