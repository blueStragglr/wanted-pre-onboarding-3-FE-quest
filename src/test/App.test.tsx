import { render, screen } from '@testing-library/react';
import App from '../App';

test('시작 텍스트가 있다!', () => {
  render(<App />);
  const linkElement = screen.getByText('시작!');
  expect(linkElement).toBeInTheDocument();
});
