import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResource, search } from './services/api';
import { Item, AppProps } from './services/interfaces';
import { Header } from './components/header/header';
import { MainPage } from './pages/main-page';
import { PokemonDetails } from './pages/pokemon-details';
import { NotFoundPage } from './pages/not-found';
import { PokemonlistContext } from './context/app-context';
import { Pagination } from './components/main/pagination';
import { loaderAction } from './store/loader-slice';

export function App(): JSX.Element {
  const dispatch = useDispatch();
  const isFetching = useSelector((state: AppProps) => state.loading.isFetching);

  const [description, setDescription] = useState<Item[]>([]);

  useEffect(() => {
    getData('');
  }, []);

  const getData = (link: string | undefined) => {
    const addUrl = link ? link : '';
    getResource(addUrl)
      .then((body) => {
        setDescription(body.results);
      })
      .then(() => dispatch(loaderAction.loaderToggler()));
  };

  const pageHandler = (currentPage = 1, limit = 20) => {
    getData(`?limit=${limit}&offset=${limit * currentPage - limit}`);
  };

  const searchHandler = (term = localStorage.getItem('term')) => {
    if (!term) {
      getData('');
    } else {
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
        });
    }
  };

  return (
    <PokemonlistContext.Provider value={description}>
      <Header callbackSearch={searchHandler} />
      {!isFetching ? (
        <img src="./img/charmander-chases-tail.gif" width={100} />
      ) : (
        ''
      )}
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
