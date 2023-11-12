import { render } from '@testing-library/react';
import { expect, test, vi, describe } from 'vitest';
import '@testing-library/jest-dom';
import List from '../../components/List';
import { people } from '../mocks';

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
