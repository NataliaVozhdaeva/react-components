import { Component } from 'react';
import './main.css';

interface T {
  description: string[];
}

export class Main extends Component<T, { description: string[] }> {
  render() {
    return (
      <main className="main-content">
        <h2 className="title">This site is about StarWars:</h2>
        <div className="card-container">
          {this.props.description.map((item, index) => (
            <div className="card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </main>
    );
  }
}
