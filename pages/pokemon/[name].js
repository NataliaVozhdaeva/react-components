
const PokemonDetails = ({pokemon}) => {
  /* 

  const renderDetais = (data) => {
    return (
      <>
        <Link to="/">
          <button className="btn btn-close">X</button>
        </Link>
        <span data-testid="details-name">{data.name.toLocaleUpperCase()}</span>
        <img data-testid="details-img" src={img} width={300} />
        <div data-testid="details-abilities" className="abilities">
          <h4>Abilities: </h4>
          {<ul className="abilities-list">
            {data.abilities.map((el: Abilities) => {
              return (
                <li className="item" key={el.ability.name}>
                  {el.ability.name}{' '}
                </li>
              );
            })}
          </ul> }
        </div>
      </>
    );
  };
 */
  return (
    <div className="card-container-inside">
      <div className="card main-card" data-testid="details">
      <h4>NAmme:</h4>
        {/* {renderDetais(data)} */}
      </div>
    </div>
  );
};

PokemonDetails.getProps = async ({query}) => {
  
const name = query.name;
console.log('name ', name)
//const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.data )
const pokemon = await getResource(name).data;

return pokemon
}

export default PokemonDetails ;