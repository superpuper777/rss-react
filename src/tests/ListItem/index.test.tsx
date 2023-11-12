import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { expect, test, describe, vi } from 'vitest';
import '@testing-library/jest-dom';

import ListItem from '../../components/List/ListItem';
import Details from '../../routers/details';
import { peopleResponse, getPeople, item, customRender } from '../mocks';
import Root from '../../routers/Root';

const mockUsedNavigate = vi.fn();
const mockUsedLocation = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  )),
  useNavigate: () => mockUsedNavigate,
  useLocation: () => mockUsedLocation,
}));

describe('testing ListItem Component', () => {
  test('component renders the relevant card data', () => {
    const { getByTestId } = render(<ListItem item={item} />);
    expect(getByTestId('card-name')).toHaveTextContent(item.name);
    expect(getByTestId('card-height')).toHaveTextContent(item.height);
    expect(getByTestId('card-birth_year')).toHaveTextContent(item.birth_year);
    expect(getByTestId('card-gender')).toHaveTextContent(item.gender);
    expect(getByTestId('card-homeworld')).toHaveTextContent(item.homeworld);
  });
  test('clicking on a card opens a detailed card component', async () => {
    const user = userEvent.setup();
    const { getAllByTestId } = render(<ListItem item={item} />);
    const providerProps = {
      setIsLoading: true,
    };
    const card = getAllByTestId('card');
    await user.click(card[0]);
    customRender(<Details />, { providerProps });
    const { getByTestId } = customRender(<Root />, { providerProps });
    expect(getByTestId('details')).toBeDefined();
  });
  test('clicking triggers an additional API call to fetch detailed information', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<ListItem item={item} />);
    const card = getByTestId('card');
    await user.click(card);
    expect(getPeople()).resolves.toEqual(peopleResponse);
  });
});
