import { render, screen, fireEvent } from '@testing-library/react';
import { ItemCard } from '../main/item-card';
import { BrowserRouter, Link, Outlet } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

const mockItem = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
};
const mockDetails = {
  name: '',
  img: '',
  abilities: [],
};

const TestCard = () => {
  return (
    <BrowserRouter>
      <Link to={mockItem.name}>
        <ItemCard item={mockItem} />
      </Link>
      <Outlet context={mockDetails} />
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
    console.dir(window.location.pathname);
    expect(window.location.pathname).toBe(expectedURL);
  });
});
