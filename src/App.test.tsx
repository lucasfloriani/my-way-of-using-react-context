import { fireEvent, render, screen } from '@testing-library/react';
import CounterProvider from './providers/count';
import App from './App';

test('renders counter', () => {
  render(
    <CounterProvider>
      <App />
    </CounterProvider>
  );
  expect(screen.getByTestId('total-text')).toHaveTextContent('0');
});

test('increase action', async () => {
  render(
    <CounterProvider>
      <App />
    </CounterProvider>
  );
  fireEvent.click(screen.getByTestId('increase-button'))
  expect(screen.getByTestId('total-text')).toHaveTextContent('1');
});

test('decrease action', async () => {
  render(
    <CounterProvider>
      <App />
    </CounterProvider>
  );
  fireEvent.click(screen.getByTestId('decrease-button'))
  expect(screen.getByTestId('total-text')).toHaveTextContent('-1');
});
