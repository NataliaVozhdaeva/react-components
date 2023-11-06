import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { getPage } from '../services/api';
import { Person } from '../services/interfaces';
import { Pagination } from '../components/main/pagination';

const PeoplePage = () => {
  const [description, setDescription] = useState<Person[]>([]);

  const getData = (url: string, page: number) => {
    getPage(url, page).then((body) => {
      setDescription(body);
    });
  };

  const pageHandler = (currentPage = 1) => {
    getData('people', currentPage);
  };

  const renderDefault = (data: Person[]) => {
    const currentData = data.map((el) => {
      return Object.entries(el);
    });

    return currentData.map((item, index) => (
      <div className="card link" key={index}>
        <Link
          to={item[0][1]}
          className="cart-field link"
          state={{ person: item }}
        >
          {item[0][1]}
        </Link>
      </div>
    ));
  };

  return (
    <div className="main-wrapper">
      <div className="main-header">
        <h2 className="title">People</h2>
      </div>
      <div className="wrapper-outlet">
        <div className="card-container-inside">
          {renderDefault(description)}
        </div>
        <Outlet />
      </div>
      <Pagination callbackPage={pageHandler}></Pagination>
    </div>
  );
};

export { PeoplePage };
