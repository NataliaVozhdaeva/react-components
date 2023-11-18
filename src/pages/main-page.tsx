import { Link, Outlet } from 'react-router-dom';
import { Item } from '../services/interfaces';
import { ItemCard } from '../components/main/item-card';
import { useGetPokeListQuery } from '../services/api';
import './main-page.css';

const MainPage = () => {
  const { data, isLoading } = useGetPokeListQuery('');

  const renderDefault = (data: Item[]) => {
    const currentData = Object.values(data);
    return currentData.map((item) => {
      return (
        <Link
          className="link"
          to={item.name}
          key={item.name}
          //onClick={() => console.log('onclc ',window.location.pathname)}
        >
          <ItemCard item={item} />
        </Link>
      );
    });
  };

  return (
    <div className="main-wrapper">
      {isLoading ? (
        <img src="./img/charmander-chases-tail.gif" width={100} />
      ) : data ? (
        <div className="wrapper-outlet">
          <div className="card-container">{renderDefault(data.results)}</div>
          <Outlet context={window.location.pathname} />
        </div>
      ) : null}
    </div>
  );
};

export { MainPage };
