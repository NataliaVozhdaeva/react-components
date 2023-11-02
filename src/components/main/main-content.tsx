import { Component } from 'react';
import './main-content.css';

interface MainState {
  description: string[];
}

export class MainContent extends Component<MainState> {
  constructor(props: MainState) {
    super(props);
  }

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
