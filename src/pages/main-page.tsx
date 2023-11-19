import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetPokeListQuery } from '../services/api';
import { ItemCard } from '../components/main/item-card';
import { FetchBody, Term, Pokemon } from '../services/interfaces';

import './main-page.css';

const MainPage = () => {
  const term = useSelector((state: Term) => state.search.term);
  const { error, data, isLoading } = useGetPokeListQuery(term);
  console.log('term ', term);

  const renderDefault = (data: FetchBody | Pokemon) => {
    console.log('data ', data);
    if (term !== '') {
      const currentData = data as Pokemon;
      return (
        <Link className="link" to={currentData.name}>
          <ItemCard item={currentData.name} />
        </Link>
      );
    } else {
      const currentData = data as FetchBody;

      return Object.values(currentData.results).map((item) => {
        return (
          <Link className="link" to={item.name} key={item.name}>
            <ItemCard item={item.name} />
          </Link>
        );
      });
    }
  };

  return (
    <div className="main-wrapper">
      {error ? (
        <div className="error-card card">
          Sorry, this Pokemon doesn&#39;t exist.
          <br /> Try change the name{' '}
        </div>
      ) : isLoading ? (
        <img src="./img/charmander-chases-tail.gif" width={100} />
      ) : data ? (
        <div className="wrapper-outlet">
          <div className="card-container">{renderDefault(data)}</div>
          <Outlet />
        </div>
      ) : null}
    </div>
  );
};

export { MainPage };
