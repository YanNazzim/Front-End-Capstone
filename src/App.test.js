// Author: Yan Nazzim Gonzalez
// Date: 3/10/2024
// Front End Capstone
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
