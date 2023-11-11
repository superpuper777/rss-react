import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { expect, test, describe, vi } from 'vitest';
import '@testing-library/jest-dom';
// import { BrowserRouter } from 'react-router-dom';
import ListItem from '../../components/List/ListItem';
// import Details from '../../routers/details';
import { peopleResponse, getPeople, item } from './mocks';

const mockUsedNavigate = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  )),
  useNavigate: () => mockUsedNavigate,
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
  test('', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<ListItem item={item} />);
    const card = getByTestId('card');
    await user.click(card);
    // render(<Details />);
    // const details = getByTestId('details');
    // expect(details).toBeDefined();
    // const route = '/details/1';
    // renderWithRouter(<Details />, { route });

    // expect(getByTestId('details')).toHaveTextContent(route);
  });
  test('', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<ListItem item={item} />);
    const card = getByTestId('card');
    await user.click(card);
    await expect(getPeople()).resolves.toEqual(peopleResponse); // jest API
  });
});
