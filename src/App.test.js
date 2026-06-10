import { render, screen } from '@testing-library/react';
import App from './App';
import { AppProvider } from './context';

test('renders Phoenix Beach shirt designer', () => {
  render(
    <AppProvider>
      <App />
    </AppProvider>
  );
  expect(screen.getByText(/phoenix beach shirt designer/i)).toBeInTheDocument();
});
