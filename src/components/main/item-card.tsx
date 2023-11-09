import { useEffect, useState } from 'react';
import { getDetails } from '../../services/api';
import { Item, Pokemon } from '../../services/interfaces';

const ItemCard = (pokemon: Item) => {
  const pokemonName = pokemon.name;
  const linkForDetails = pokemon.url;

  const [details, setDetails] = useState<Pokemon>({
    name: '',
    img: '',
    abilities: [],
  });

  useEffect(() => {
    getDataDetails();
  }, []);

  const getDataDetails = () => {
    getDetails(linkForDetails).then((body) => {
      setDetails({
        name: body.name,
        img: body.sprites.other.dream_world.front_default,
        abilities: body.abilities,
      });
    });
  };

  return (
    <>
      <span className="name">{pokemonName}</span>
      <img className="img" src={details.img} alt={pokemonName} width={100} />
    </>
  );
};
export { ItemCard };
