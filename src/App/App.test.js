import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders: CRA Template Ganevru', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Интервал обновления секундомера/i);
  expect(linkElement).toBeInTheDocument();
});
