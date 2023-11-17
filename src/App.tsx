import { Routes, Route } from 'react-router-dom';
/* import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResource, search } from './services/api';
import { loaderAction } from './store/loader-slice';
import { pokeListActions } from './store/pokeList-slice';
import { PokemonlistContext } from './context/app-context'; 
import { AppProps } from './services/interfaces';
import { Header } from './components/header/header';*/
import { MainPage } from './pages/main-page';
import { PokemonDetails } from './pages/pokemon-details';
import { NotFoundPage } from './pages/not-found';
//import { Pagination } from './components/main/pagination';
//import { useGetPokeListQuery } from './services/api';

export function App(): JSX.Element {
  //const { data, isLoading, error } = useGetPokeListQuery('');
  //const dispatch = useDispatch();
  //const isFetching = useSelector((state: AppProps) => state.loading.isFetching);

  //const pokelist = useSelector((state: AppProps) => state.pokeList.pokelist);
  //const [description, setDescription] = useState<Item[]>([]);
  //const description = useSelector((state: AppProps) => state.pokeList.pokelist)
  //console.log('description ',description )

  /*   useEffect(() => {
    getData('');
  }, []);

  const getData = (link: string | undefined) => {
    const addUrl = link ? link : '';
    getResource(addUrl)
      .then((body) => {
        //setDescription(body.results);
      })
      //.then(() => dispatch(loaderAction.loaderToggler()));
  }; 

  const pageHandler = (currentPage = 1, limit = 20) => {
    getData(`?limit=${limit}&offset=${limit * currentPage - limit}`);
  };*/

  /*  const searchHandler = (term = localStorage.getItem('term')) => {
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
  };*/

  return (
    <>
      {/* <Header callbackSearch={searchHandler} /> */}
      {/* {!isFetching ? (
        <img src="./img/charmander-chases-tail.gif" width={100} />
      ) : (
        ''
      )} */}
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/:name" element={<PokemonDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/*       <Pagination callbackPage={pageHandler} /> */}
    </>
  );
}
