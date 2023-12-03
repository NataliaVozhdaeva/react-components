import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Header } from './components/header/header';
import { MainPage } from './pages/main-page';
import { PokemonDetails } from './pages/pokemon-details';
import { NotFoundPage } from './pages/not-found';
import { Pagination } from './components/main/pagination';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/:name" element={<PokemonDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Pagination />
    </Provider>
  );
}
