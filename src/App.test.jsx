import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Art Router', () => {
  it('renders a list of art works', async () => {
    render(<App />);

    screen.getByText(/loading.../i);

    await screen.findAllByAltText('Artworks');
  });
});
