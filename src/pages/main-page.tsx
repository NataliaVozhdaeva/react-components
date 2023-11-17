import { Link } from 'react-router-dom';
import { Item } from '../services/interfaces';
import { ItemCard } from '../components/main/item-card';
import {
  useGetPokeListQuery /* , useGetPokemonByNameQuery */,
} from '../services/api';
import './main-page.css';

const MainPage = () => {
  const { data, isLoading } = useGetPokeListQuery('');

  /*  const [details, setDetails] = useState<Pokemon>({
    name: '',
    img: '',
    abilities: [],
  }); */

  /*     const getDataDetails = (value: string) => {
      const pokeName = value
      useGetPokemonByNameQuery(pokeName)
    }; */

  const renderDefault = (data: Item[]) => {
    const currentData = Object.values(data);
    return currentData.map((item) => {
      return (
        <Link
          className="link"
          to={item.name}
          key={item.name}
          //onClick={() => getDataDetails(item.url)}
        >
          <ItemCard item={item} />
        </Link>
      );
    });
  };

  return (
    <div className="main-wrapper">
      <div className="wrapper-outlet">
        {isLoading ? (
          <img src="./img/charmander-chases-tail.gif" width={100} />
        ) : data ? (
          <div className="card-container">{renderDefault(data.results)}</div>
        ) : null}

        {/*  <div className="card-container">{renderDefault(ctxList)}</div>
        <Outlet context={{ pokemon: details }} /> */}
      </div>
    </div>
  );
};

export { MainPage };
