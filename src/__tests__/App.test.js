import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders Questions pool', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Questions pool/i);
  expect(linkElement).toBeInTheDocument();
});
