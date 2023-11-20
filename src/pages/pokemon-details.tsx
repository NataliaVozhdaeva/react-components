import { Link } from 'react-router-dom';
import { Abilities, FetchBody } from '../services/interfaces';
import { useParams } from 'react-router-dom';
import { useGetPokeListQuery } from '../services/api';

const PokemonDetails = () => {
  const params = useParams<{ name: string }>();
  // if (!params.name) throw new Error('params');
  const { data, isLoading } = useGetPokeListQuery(params.name || '');
  let img: string;
  if (data) {
    img = data.sprites.other.dream_world.front_default;
  }

  const renderDetais = (data: FetchBody) => {
    return (
      <>
        <Link to="/" data-testid="close-btn">
          <button className="btn btn-close">X</button>
        </Link>
        <span data-testid="details-name">{data.name.toLocaleUpperCase()}</span>
        <img data-testid="details-img" src={img} width={300} />
        <div data-testid="details-abilities" className="abilities">
          <h4>Abilities: </h4>
          <ul className="abilities-list">
            {data.abilities.map((el: Abilities) => {
              return (
                <li className="item" key={el.ability.name}>
                  {el.ability.name}{' '}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="card-container-inside">
      <div className="card main-card" data-testid="details">
        {isLoading ? (
          <img src="./img/charmander-chases-tail.gif" height={100} />
        ) : data ? (
          renderDetais(data)
        ) : null}
      </div>
    </div>
  );
};

export { PokemonDetails };
