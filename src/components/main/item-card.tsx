import { CardProps } from '../../services/interfaces';

const ItemCard = ({ item }: CardProps) => {
  const pokemonName = item.name;
  return (
    <div className="card">
      <span className="name">{pokemonName}</span>
    </div>
  );
};
export { ItemCard };
