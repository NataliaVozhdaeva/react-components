import /* getDetails */ '../../services/api';
import { /* Pokemon, */ CardProps } from '../../services/interfaces';

const ItemCard = ({ item }: CardProps) => {
  //const [clicked, setCliked] =  useState(false)

  const pokemonName = item.name;
  //const linkForDetails = item.url;
  /* 
    useEffect(() => {
    getDataDetails();
  }, []); 

   const getDataDetails = () => {
    getDetails(linkForDetails).then((body) => {
      setDetails({
        name: body.name,
        img: body.sprites.other.dream_world.front_default,
        abilities: body.abilities,
      });

    });
  };  */

  return (
    <div className="card link">
      <span className="name">{pokemonName}</span>
      {/* <img className="img" src={details.img} alt={pokemonName} width={100} /> */}
    </div>
  );
};
export { ItemCard };
