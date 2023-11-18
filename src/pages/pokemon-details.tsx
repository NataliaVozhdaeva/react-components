import { Link } from 'react-router-dom';
import { Pokemon } from '../services/interfaces';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../services/api';

const PokemonDetails = () => {
  const params = useParams<{ name: string }>();
  if (!params.name) throw new Error('params');
  const { data, isLoading } = useGetPokemonByNameQuery(params.name);
  let img: string;
  if (data) {
    console.log('poke ', data.sprites.other.dream_world.front_default);
    img = data.sprites.other.dream_world.front_default;
  }
  /*  useEffect(() => {
    if(data){
    renderDetais(data)}
  }, []); */
  /* if(!data) throw new Error('data')
  const abilities: Abilities[] = data.abilities; */

  const renderDetais = (data: Pokemon) => {
    //console.log('poke ', data)
    return (
      <>
        <Link to="/">
          <button className="btn btn-close">X</button>
        </Link>
        <span data-testid="details-name">{data.name.toLocaleUpperCase()}</span>
        <img data-testid="details-img" src={img} width={300} />
        <div data-testid="details-abilities" className="abilities">
          <h4>Abilities: </h4>
          {/* <ul className="abilities-list">
            {abilities.map((el) => {
              return (
                <li className="item" key={el.ability.name}>
                  {el.ability.name}{' '}
                </li>
              );
            })}
          </ul> */}
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
