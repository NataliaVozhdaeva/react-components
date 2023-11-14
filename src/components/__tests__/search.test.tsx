import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../header/header';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, beforeEach } from 'vitest';

const callback = () => {};

const TestHeader = () => {
  return (
    <BrowserRouter>
      <Header callbackSearch={callback} />
    </BrowserRouter>
  );
};

describe('search component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('set term to localStorage', () => {
    render(<TestHeader />);
    const btn = screen.getByText('Search');
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'pikachu' } });
    fireEvent.click(btn);
    expect(localStorage.getItem('term')).toBe('pikachu');
  });
});
