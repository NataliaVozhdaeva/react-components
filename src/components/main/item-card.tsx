import { useGetPokeListQuery } from '../../services/api';
import { CardProps } from '../../services/interfaces';

const ItemCard = ({ item }: CardProps) => {
  const pokemonName = item;
  const { data } = useGetPokeListQuery(item);
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
