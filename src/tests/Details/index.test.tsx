import { screen } from '@testing-library/react';
import { expect, test, vi, describe } from 'vitest';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { renderWithProviders } from '../../utils/test-utils';
import { customRender } from '../mocks';

import Details from '../../routers/details';
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

describe('testing Details Component', () => {
  test('loading indicator is displayed while fetching data', () => {
    const providerProps = {
      setIsLoading: true,
    };
    const { getByTestId } = customRender(<Details />, { providerProps });
    const loader = getByTestId('loader');
    expect(loader).toBeDefined();
  });
  test('the detailed card component correctly displays the detailed card data', () => {});
  test('clicking the close button hides the component', async () => {
    const providerProps = {
      setIsLoading: true,
    };
    const { getByTestId } = customRender(<Details />, { providerProps });
    const closeButton = getByTestId('close-button');
    const user = userEvent.setup();
    await user.click(closeButton);
    // customRender(<Root />), { providerProps });
    renderWithProviders(<Root />);
    expect(screen.getByTestId('app')).toBeDefined();
  });
});
