import { Outlet /* Link,  useParams */ } from 'react-router-dom';
//import { useState } from 'react';
//import { getPage } from '../services/api';
import { Item } from '../services/interfaces';
//import { Pagination } from '../components/main/pagination';
import { ItemCard } from '../components/main/item-card';

import './main-page.css';

const MainPage = (props: Item[]) => {
  const description = props;

  // const [description, setDescription] = useState<Pokemon[]>([]);

  /*   const getData = () => {
    getPage(url, page).then((body) => {
      setDescription(body);
    });
  }; */

  /*   const pageHandler = (currentPage = 1) => {
    getData('people', currentPage);
  }; */

  const renderDefault = (data: Item[]) => {
    const currentData = Object.values(data);
    //console.log(currentData)

    return currentData.map((item) => {
      return (
        <div key={item.name} className="card">
          <ItemCard {...item} />
        </div>
      );
    });
  };

  return (
    <div className="main-wrapper">
      <div className="wrapper-outlet">
        <div className="card-container-inside">
          {renderDefault(description)}
        </div>
        <Outlet />
      </div>
      {/* <Pagination callbackPage={pageHandler}></Pagination> */}
    </div>
  );
};

export { MainPage };
