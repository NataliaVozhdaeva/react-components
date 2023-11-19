import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetPokeListQuery } from '../services/api';
import { ItemCard } from '../components/main/item-card';
import { FetchBody, Term, Limit, PageProps } from '../services/interfaces';

import './main-page.css';

const MainPage = () => {
  const term = useSelector((state: Term) => state.search.term);
  const limit = useSelector((state: Limit) => state.pagination.limit);
  const currentPage = useSelector(
    (state: PageProps) => state.pagination.currentPage
  );
  const { error, data, isLoading } = useGetPokeListQuery(
    term + `?limit=${limit}&offset=${limit * currentPage - limit}`
  );

  const renderDefault = (data: FetchBody) => {
    if (term !== '') {
      return (
        <Link className="link" to={data.name}>
          <ItemCard item={data.name} />
        </Link>
      );
    } else {
      return Object.values(data.results).map((item) => {
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
