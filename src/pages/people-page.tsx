import { useState } from 'react';
import { getPage } from '../services/api';
import { Person } from '../services/interfaces';
import { Pagination } from '../components/main/pagination';

const PeoplePage = () => {
  const [description, setDescription] = useState<Person[]>([]);

  const getData = (url: string, page: number) => {
    getPage(url, page).then((body) => {
      setDescription(body);
      console.log('default ', page);
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
        <span className="cart-field">{item[0][1]}</span>
      </div>
    ));
  };

  return (
    <div className="main-wrapper">
      <div className="main-header">
        <h2 className="title">People</h2>
      </div>

      <div className="card-container">{renderDefault(description)}</div>
      <Pagination callbackPage={pageHandler}></Pagination>
    </div>
  );
};

export { PeoplePage };

/*

*<div className="range-wrapper">
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



 * const renderDetais = (data: Person[]) => {
    const values = data.map((el) => {
      return Object.entries(el);
    });
    console.log(values)
    return values.map((item, index) => (
      <div className="card " key={index}>
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
        </div>
      </div>
    ));
  }
 */
