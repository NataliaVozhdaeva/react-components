import { Outlet, Link /*,  useParams */ } from 'react-router-dom';
//import { getDetails } from '../services/api';
import { useState /* , useEffect */ } from 'react';
//import { getPage } from '../services/api';
import { Item, Pokemon } from '../services/interfaces';
//import { Pagination } from '../components/main/pagination';
import { ItemCard } from '../components/main/item-card';
import { getDetails } from '../services/api';

import './main-page.css';

const MainPage = (props: Item[]) => {
  const description = props;
  const [details, setDetails] = useState<Pokemon>({
    name: '',
    img: '',
    abilities: [],
  });

  //const items = Object.values(props);

  /*  useEffect(() => {
      getDataDetails();
  }, []);  */

  const getDataDetails = (value: string) => {
    getDetails(value).then((body) => {
      //console.log('base ', details)

      setDetails({
        name: body.name,
        img: body.sprites.other.dream_world.front_default,
        abilities: body.abilities,
      });
      //console.log('details ', details)
    });
  };

  const renderDefault = (data: Item[]) => {
    const currentData = Object.values(data);
    //console.log('details ', details)
    return currentData.map((item) => {
      return (
        <Link
          to={item.name}
          key={item.name}
          onClick={() => getDataDetails(item.url)}
          state={{ pokemon: details }}
        >
          <ItemCard item={item} /* callbackUpdate={updateHandler}   */ />
        </Link>
      );
    });
  };

  return (
    <div className="main-wrapper">
      <div className="wrapper-outlet">
        <div className="card-container">{renderDefault(description)}</div>
        <Outlet />
      </div>
      {/* <Pagination callbackPage={pageHandler}></Pagination> */}
    </div>
  );
};

export { MainPage };

/*   const updateHandler = (value = details) => {
   //console.log('main value ', value)
    setDetails(details);
  } */

// const [description, setDescription] = useState<Pokemon[]>([]);

/*   const getData = () => {
    getPage(url, page).then((body) => {
      setDescription(body);
    });
  }; */

/*   const pageHandler = (currentPage = 1) => {
    getData('people', currentPage);
  }; */

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
