import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Art Router', () => {
  it('renders a list of art works', async () => {
    render(<App />);

    //check to see that loading message appears
    screen.getByText(/loading.../i);

    //check that list images have rendered from api call
    await screen.findAllByAltText('Artworks');
  });

  it.only('should render a specific a detail page given a url with an id', async () => {
    render(
      <MemoryRouter
        initialEntries={['/art', '/art/22482']}
        initialIndex={1}
      >
        <App />
      </MemoryRouter>
    );

    // user should be seeing detail information
    await screen.findByText('Homesickness');

    //check to see that more data is displaying
    await screen.findByText('c. 1948, Belgium');
  });
});
