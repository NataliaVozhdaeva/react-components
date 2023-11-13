import { CardProps, Pokemon } from '../../services/interfaces';
import { getDetails } from '../../services/api';
import { useState, useEffect } from 'react';

const ItemCard = ({ item }: CardProps) => {
  const pokemonName = item.name;
  const [details, setDetails] = useState<Pokemon>({
    name: '',
    img: '',
    abilities: [],
  });

  useEffect(() => {
    getDataDetails(item.url);
  }, []);

  const getDataDetails = (value: string) => {
    getDetails(value).then((body) => {
      setDetails({
        name: body.name,
        img: body.sprites.other.dream_world.front_default,
        abilities: body.abilities,
      });
    });
  };

  return (
    <div className="card">
      <span className="name">{pokemonName}</span>
      <img className="view" src={details.img} width="100" />
    </div>
  );
};
export { ItemCard };
