import { useOutletContext } from 'react-router-dom';
import { Pokemon, Abilities } from '../services/interfaces';

const PokemonDetails = () => {
  const { pokemon } = useOutletContext<{ pokemon: Pokemon }>();
  const abilities: Abilities[] = pokemon.abilities;
  //pokemon.abilities.forEach((el) => abilities.push(el))

  //console.log(abilities[0].ability.name)
  const renderDetais = (data: Pokemon) => {
    return (
      <div className="card main-card">
        <button className="btn btn-close" onClick={() => console.log('close')}>
          X
        </button>
        <span>{data.name.toLocaleUpperCase()}</span>
        <img src={data.img} width={300} />
        <div className="abilities">
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
