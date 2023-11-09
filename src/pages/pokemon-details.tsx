import { useOutletContext } from 'react-router-dom';
import { Pokemon } from '../services/interfaces';

const PokemonDetails = () => {
  const { pokemon } = useOutletContext<{ pokemon: Pokemon }>();
  const renderDetais = (data: Pokemon) => {
    return (
      <div className="card main-card">
        <button className="btn btn-close" onClick={() => console.log('close')}>
          X
        </button>
        <span>{data.name.toLocaleUpperCase()}</span>
        <img src={data.img} width={300} />
        {/* <span>{data.abilities}</span>  */}
      </div>
    );
  };

  return <div className="card-container-inside">{renderDetais(pokemon)}</div>;
};

export { PokemonDetails };
