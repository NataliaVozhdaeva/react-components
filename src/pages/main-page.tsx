import { Link } from 'react-router-dom';
import { MainProps, Item } from '../services/interfaces';
import '../components/main/main-content.css';

export function MainPage(props: MainProps): JSX.Element {
  const renderDefault = (data: Item) => {
    const currentData = Object.keys(data);
    return currentData.map((item, index) => (
      <Link to={`/${item}`} className="card link" key={index}>
        <span className="cart-field">{item}</span>
      </Link>
    ));
  };

  const renderTerm = (data: Item[]) => {
    const values = data.map((el) => {
      return Object.entries(el);
    });

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
      </div>
    ));
  };

  return (
    <main className="main-content">
      <h2 className="title">This site is about StarWars:</h2>
      <div className="card-container">
        {props.isDefault
          ? renderDefault(props.description as Item)
          : renderTerm(props.description as Item[])}
      </div>
    </main>
  );
}
