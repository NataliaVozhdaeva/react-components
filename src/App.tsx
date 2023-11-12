import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getResource, search } from './services/api';
import { Item } from './services/interfaces';
import { Header } from './components/header/header';
import { MainPage } from './pages/main-page';
import { PokemonDetails } from './pages/pokemon-details';
import { NotFoundPage } from './pages/not-found';
import { PokemonlistContext } from './context/app-context';

export function App(): JSX.Element {
  //const [isDefault, setIsDefault] = useState(true);
  const [description, setDescription] = useState<Item[]>([]);
  //const [isDetaied] = useState(false)

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getResource('').then((body) => {
      setDescription(body.results);
    });
  };

  const searchHandler = (term = '') => {
    if (!term) throw new Error('type the name');
    search(term).then((body) => {
      setDescription([
        {
          name: body.name,
          url: `https://pokeapi.co/api/v2/pokemon/${term}`,
        },
      ]);
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
    </PokemonlistContext.Provider>
  );
}
