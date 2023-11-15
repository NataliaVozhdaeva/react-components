import { render, screen } from '@testing-library/react';
import { NotFoundPage } from '../../pages/not-found';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

const Test404 = () => {
  return (
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );
};

describe('not-found page', () => {
  it('renders not-found element', () => {
    render(<Test404 />);
    const notFoundMsg = screen.getByText("This page wasn't found");
    expect(notFoundMsg).toBeInTheDocument();

    const homeLink = screen.getByRole('link');
    expect(homeLink).toBeInTheDocument();
  });
});
