import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Art Router', () => {
  it('renders a list of art works', async () => {
    render(<App />);

    //check to see that loading message appears
    screen.getByText(/loading.../i);

    //check that list images have rendered from api call
    await screen.findAllByAltText('Artworks');
  });

  it('should navigate to a detail page', async () => {
    render(
      <MemoryRouter initialEntries={['/art']}>
        <App />
      </MemoryRouter>
    );

    //check to find link 
    const link = await screen.findByText('Homesickness');
    
    //user clicks on link
    userEvent.click(link);

    //check to see that more data is displaying
    await screen.findByText('c. 1948, Belgium');
  });
});
