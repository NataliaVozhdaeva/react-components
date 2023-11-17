import { CardProps } from '../../services/interfaces';
import { useGetPokemonByNameQuery } from '../../services/api';

const ItemCard = ({ item }: CardProps) => {
  const pokemonName = item.name;
  const { data } = useGetPokemonByNameQuery(item.url);

  return (
    <div className="card" data-testid="card-element">
      <span className="name">{pokemonName}</span>
      <img
        className="view"
        src={data ? data.sprites.other.dream_world.front_default : ''}
        width="100"
      />
    </div>
  );
};
export { ItemCard };
