import { Component } from 'react';
import ApiService from '../../services/api';
import './main-content.css';

interface State {
  description: string[];
  state: boolean;
}

export class MainContent extends Component<
  State,
  { description: string[]; state: boolean }
> {
  apiService = new ApiService();

  renderDefault(data: string[]) {
    return data.map((item, index) => (
      <div className="card" key={index}>
        <span className="cart-field">{item}</span>
      </div>
    ));
  }
  render() {
    return (
      <main className="main-content">
        <h2 className="title">This site is about StarWars:</h2>
        <div className="card-container">
          {this.renderDefault(this.props.description)}
        </div>
      </main>
    );
  }
}
