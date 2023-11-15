import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getResource, search } from './services/api';
import { Item } from './services/interfaces';
import { Header } from './components/header/header';
import { MainPage } from './pages/main-page';
import { PokemonDetails } from './pages/pokemon-details';
import { NotFoundPage } from './pages/not-found';
import { PokemonlistContext } from './context/app-context';
import { Pagination } from './components/main/pagination';

export function App(): JSX.Element {
  const [description, setDescription] = useState<Item[]>([]);

  useEffect(() => {
    getData('');
  }, []);

  const getData = (link: string | undefined) => {
    const addUrl = link ? link : '';
    getResource(addUrl).then((body) => {
      setDescription(body.results);
    });
  };

  const pageHandler = (currentPage = 1, limit = 20) => {
    getData(`?limit=${limit}&offset=${limit * currentPage - limit}`);
  };

  const searchHandler = (term = localStorage.getItem('term')) => {
    if (!term) throw new Error('type the name');
    search(term)
      .then((body) => {
        setDescription([
          {
            name: body.name,
            url: `https://pokeapi.co/api/v2/pokemon/${term}`,
          },
        ]);
      })
      .catch((error) => {
        setDescription([
          {
            name: 'Sorry, ' + error.message,
            url: `https://pokeapi.co/api/v2/pokemon/*`,
          },
        ]);
        console.log('error ', error);
      });
  };

  return (
    <PokemonlistContext.Provider value={description}>
      <Header callbackSearch={searchHandler} />

      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/:name" element={<PokemonDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Pagination callbackPage={pageHandler} />
    </PokemonlistContext.Provider>
  );
}
