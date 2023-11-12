import { Outlet, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import PokemonlistContext from '../context/app-context';
import { Item, Pokemon } from '../services/interfaces';
//import { Pagination } from '../components/main/pagination';
import { ItemCard } from '../components/main/item-card';
import { getDetails /* getPage  */ } from '../services/api';

import './main-page.css';

const MainPage = () => {
  const ctx = useContext(PokemonlistContext);
  const [details, setDetails] = useState<Pokemon>({
    name: '',
    img: '',
    abilities: [],
  });
  /*const [data, setData] = useState<MainProps>({description: description, limit: 20})
  
  useEffect(() => {
  //  console.log('useEffect ', details);
   
  }, [details]);*/

  const getDataDetails = (value: string) => {
    getDetails(value).then((body) => {
      setDetails({
        name: body.name,
        img: body.sprites.other.dream_world.front_default,
        abilities: body.abilities,
      });
    });
  };

  /* const getData = (page: number) => {
  const limit = data.limit*page

    getPage(limit).then((body) => {
      //setDescription(body);
      console.log(body.splice(-20));
      const newData = body.splice(-20)
      setData({description: newData, limit: limit})
    }).then(()=> renderDefault(data.description));
  };

  const pageHandler = (page: number) => {
    getData(page);
  }; */

  const renderDefault = (data: Item[]) => {
    const currentData = Object.values(data);
    //console.log('details ', details)
    return currentData.map((item) => {
      return (
        <Link
          className="link"
          to={item.name}
          key={item.name}
          onClick={() => getDataDetails(item.url)}
          state={{ pokemon: details }}
        >
          <ItemCard item={item} />
        </Link>
      );
    });
  };

  return (
    <div className="main-wrapper">
      <div className="wrapper-outlet">
        <div className="card-container">{renderDefault(ctx)}</div>
        <Outlet context={{ pokemon: details }} />
      </div>
      {/*  <Pagination callbackPage={pageHandler}></Pagination> */}
    </div>
  );
};

export { MainPage };

/*<div className="range-wrapper">
<label htmlFor="itemAmount" className="label">
Items per page
</label>
<span>6</span>
<input
id="itemAmount"
type="range"
step="2"
min="6"
max="10"
className="range"
/>
<span>10</span>
</div>

*/
