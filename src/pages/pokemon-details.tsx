//import { useLocation,  useNavigate  } from 'react-router-dom';
//import { DetailsProps } from '../services/interfaces';
//import { useState } from 'react';
import { useLocation /* , useNavigate */ } from 'react-router-dom';
import { Pokemon } from '../services/interfaces';
//import { getDetails } from '../services/api';

const PokemonDetails = () => {
  const location = useLocation();
  const pokemon = location.state.pokemon;
  /*const [pokemon, setPokemon] = useState<Pokemon>({
    name: '',
    img: '',
    abilities: [],
  }); */

  //console.log('pokemon ', pokemon)
  //const navigate = useNavigate();
  //console.log(pokemon)

  const renderDetais = (data: Pokemon) => {
    console.log('data ', data.name);
    return (
      <div className="card main-card">
        <span>{data.name.toLocaleUpperCase()}</span>
        <img src={data.img} />
        {/* <span>{data.abilities}</span>  */}
      </div>
    );
  };

  return <div className="card-container-inside">{renderDetais(pokemon)}</div>;
};

export { PokemonDetails };

/*  <button className="btn btn-close" onClick={() => (console.log('close'))}>
          X
        </button>
        <div>
          <span>{item[0][0]}: </span>
          <span className="cart-field">{item[0][1]}</span>
        </div>
        <div>
          <span>{item[1][0]}: </span>
          <span className="cart-field">{item[1][1]}</span>
        </div>
        <div>
          <span>{item[2][0]}: </span>
          <span className="cart-field">{item[2][1]}</span>
        </div>
        <div>
          <span>{item[6][0]}: </span>
          <span className="cart-field">{item[6][1]}</span>
        </div> */
