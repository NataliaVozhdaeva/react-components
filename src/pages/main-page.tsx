import { Outlet, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Item, Pokemon } from '../services/interfaces';
import { ItemCard } from '../components/main/item-card';
import { getDetails } from '../services/api';
import './main-page.css';
import { PokemonlistContext } from '../context/app-context';

const MainPage = () => {
  const ctx = useContext(PokemonlistContext);
  const [details, setDetails] = useState<Pokemon>({
    name: '',
    img: '',
    abilities: [],
  });

  const getDataDetails = (value: string) => {
    getDetails(value).then((body) => {
      setDetails({
        name: body.name,
        img: body.sprites.other.dream_world.front_default,
        abilities: body.abilities,
      });
    });
  };

  const renderDefault = (data: Item[]) => {
    const currentData = Object.values(data);
    return currentData.map((item) => {
      return (
        <Link
          className="link"
          to={item.name}
          key={item.name}
          onClick={() => getDataDetails(item.url)}
          state={{ pokemon: details }}
        >
          <ItemCard item={item} />
        </Link>
      );
    });
  };

  return (
    <div className="main-wrapper">
      <div className="wrapper-outlet">
        <div className="card-container">{renderDefault(ctx)}</div>
        <Outlet context={{ pokemon: details }} />
      </div>
    </div>
  );
};

export { MainPage };
