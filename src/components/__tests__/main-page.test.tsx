import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { MainPage } from '../../pages/main-page';
//import store from '../../store/store';
//import {initialStateOfPaginatio};

const TestApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </BrowserRouter>
  );
};

describe('Main-page', () => {
  it('should render the main-page', () => {
    render(<TestApp />);
    const mainElement = screen.getByTestId('main-screen');
    expect(mainElement).toBeInTheDocument();
  });

  it('Error not to be in the component by default', async () => {
    render(<TestApp />);
    expect(screen.queryByText('Sorry')).not.toBeInTheDocument();
  });
});
