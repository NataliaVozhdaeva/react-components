import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { Pagination } from '../main/pagination';

const TestApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Pagination />
      </Provider>
    </BrowserRouter>
  );
};

describe('Pagination', () => {
  it('check initial pagination state', () => {
    const state = store.getState();
    expect(state.pagination.currentPage).toBe(1);
    expect(state.pagination.limit).toBe(9);
  });

  it('check page-btns', () => {
    render(<TestApp />);

    const next = screen.getByTestId('next');
    const prev = screen.getByTestId('prev');
    expect(next).toBeInTheDocument();
    expect(prev).toBeInTheDocument();
  });

  it('check changing page', async () => {
    render(<TestApp />);

    const next = screen.getByTestId('next');
    const prev = screen.getByTestId('prev');
    const page = screen.getByTestId('page-text');
    fireEvent.click(next);
    await Promise.resolve();
    expect(page).toHaveTextContent('2');
    fireEvent.click(prev);
    await Promise.resolve();
    expect(page).toHaveTextContent('1');
  });
});
