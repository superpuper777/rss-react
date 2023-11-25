import { expect, test, describe } from 'vitest';
// import '@testing-library/jest-dom';

import Root from '../../routers/Root';
import { render } from '../../utils/test-utils2';

// vi.mock('react-router-dom', async () => ({
//   ...(await vi.importActual<typeof import('react-router-dom')>(
//     'react-router-dom'import { customRender } from './../mocks';

//   )),
//   useNavigate: () => mockUsedNavigate,
//   useLocation: () => mockUsedLocation,
// }));

describe('testing Root Component', () => {
  test('full app rendering', async () => {
    const { getByTestId } = render(<Root />);
    expect(getByTestId('app'));
  });
});
