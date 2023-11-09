import /* getDetails */ '../../services/api';
import { /* Pokemon, */ CardProps } from '../../services/interfaces';

const ItemCard = ({ item }: CardProps) => {
  const pokemonName = item.name;

  return (
    <div className="card">
      <span className="name">{pokemonName}</span>
      {/* <img className="img" src={details.img} alt={pokemonName} width={100} /> */}
    </div>
  );
};
export { ItemCard };
