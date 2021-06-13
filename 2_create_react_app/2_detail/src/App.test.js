import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/新年快乐/i);
  expect(linkElement).toBeInTheDocument();
});
