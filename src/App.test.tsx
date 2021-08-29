import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
  await waitFor(() => {
    expect(screen.getByTestId('total-text')).toHaveTextContent('1');
  })
});

test('decrease action', async () => {
  render(
    <CounterProvider>
      <App />
    </CounterProvider>
  );
  fireEvent.click(screen.getByTestId('decrease-button'))
  await waitFor(() => {
    expect(screen.getByTestId('total-text')).toHaveTextContent('-1');
  })
});
