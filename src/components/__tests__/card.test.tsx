import { render, screen, fireEvent } from '@testing-library/react';
import { ItemCard } from '../main/item-card';
import { BrowserRouter, Link, Outlet } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import store from '../../store/store';

const mockItem = {
  name: 'bulbasaur',
};
const mockDetails = {
  name: 'bulbasaur',
  img: '',
  abilities: [],
};

const TestCard = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Link to={mockItem.name}>
          <ItemCard item={mockItem.name} />
        </Link>
        <Outlet context={mockDetails} />
      </Provider>
    </BrowserRouter>
  );
};

describe('Card component', () => {
  it('renders card', () => {
    render(<TestCard />);
    const cardElement = screen.getByTestId('card-element');
    expect(cardElement).toBeInTheDocument();
  });

  it('opens details by click', async () => {
    render(<TestCard />);
    const cardElement = screen.getByTestId('card-element');
    fireEvent.click(cardElement);

    const expectedURL = `/${mockItem.name}`;
    expect(window.location.pathname).toBe(expectedURL);
  });
});
