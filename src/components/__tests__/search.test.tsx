import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../header/header';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

const callback = () => {};

const TestHeader = () => {
  return (
    <BrowserRouter>
      <Header callbackSearch={callback} />
    </BrowserRouter>
  );
};

describe('search component', () => {
  it('set term to localStorage', () => {
    render(<TestHeader />);
    const btn = screen.getByText('Search');
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'pikachu' } });
    fireEvent.click(btn);
    expect(localStorage.getItem('term')).toBe('pikachu');
  });

  it('get term from localStorage', () => {
    render(<TestHeader />);
    const input = screen.getByTestId('search-input') as HTMLInputElement;
    expect(input.value).toBe(localStorage.getItem('term'));
  });
});
