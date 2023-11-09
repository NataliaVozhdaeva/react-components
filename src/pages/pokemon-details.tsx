//import { useLocation, useNavigate } from 'react-router-dom';
//import { DetailsProps } from '../services/interfaces';

const PokemonDetails = () => {
  //const location = useLocation();
  //const person = location.state;
  // const navigate = useNavigate();

  const renderDetais = (/* data: DetailsProps */) => {
    // const item = Object.values(data).flat();
    return (
      <div className="card main-card">
        {' '}
        lber;vsgjbaverjb
        {/*  <button className="btn btn-close" onClick={() => (console.log('close'))}>
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
        </div> */}
      </div>
    );
  };

  return <div className="card-container-inside">{renderDetais()}</div>;
};

export { PokemonDetails };
