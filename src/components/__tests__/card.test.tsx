import { render, screen } from '@testing-library/react';
import { ItemCard } from '../main/item-card';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

const TestCard = () => {
  return (
    <BrowserRouter>
      <ItemCard
        item={{ name: '', url: 'https://pokeapi.co/api/v2/pokemon/10/' }}
      />
    </BrowserRouter>
  );
};

describe('Card component', () => {
  describe('card component rendering', () => {
    it('renders card', () => {
      render(<TestCard />);
      const cardElement = screen.getByTestId('card-element');
      expect(cardElement).toBeInTheDocument();
    });
  });
});
