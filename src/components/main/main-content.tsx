import { Component } from 'react';
import { State, Item } from '../../services/interfaces';
import './main-content.css';

export class MainContent extends Component<State> {
  constructor(props: State) {
    super(props);
  }

  renderDefault(data: Item[]) {
    const currentData = Object.keys(data);
    return currentData.map((item, index) => (
      <div className="card" key={index}>
        <span className="cart-field">{item}</span>
      </div>
    ));
  }

  renderTerm(data: Item[]) {
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
  }

  render() {
    return (
      <main className="main-content">
        <h2 className="title">This site is about StarWars:</h2>
        <div className="card-container">
          {this.props.isDefault
            ? this.renderDefault(this.props.description)
            : this.renderTerm(this.props.description)}
        </div>
      </main>
    );
  }
}
