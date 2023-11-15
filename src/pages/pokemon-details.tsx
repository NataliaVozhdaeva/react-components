import { useOutletContext, Link } from 'react-router-dom';
import { Pokemon, Abilities } from '../services/interfaces';

const PokemonDetails = () => {
  const { pokemon } = useOutletContext<{ pokemon: Pokemon }>();
  const abilities: Abilities[] = pokemon.abilities;

  const renderDetais = (data: Pokemon) => {
    return (
      <div className="card main-card" data-testid="details">
        <Link to="/">
          <button className="btn btn-close">X</button>
        </Link>
        <span data-testid="details-name">{data.name.toLocaleUpperCase()}</span>
        <img data-testid="details-img" src={data.img} width={300} />
        <div data-testid="details-abilities" className="abilities">
          <h4>Abilities: </h4>
          <ul className="abilities-list">
            {abilities.map((el) => {
              return (
                <li className="item" key={el.ability.name}>
                  {el.ability.name}{' '}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  return <div className="card-container-inside">{renderDetais(pokemon)}</div>;
};

export { PokemonDetails };
