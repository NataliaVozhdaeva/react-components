import { Component } from 'react';
import ApiService from '../../services/api';
import './main.css';

export class Main extends Component<object, { description: string[] }> {
  apiService = new ApiService();

  constructor(props: []) {
    super(props);
    this.getData();
    this.state = {
      description: [],
    };
  }

  getData() {
    this.apiService.getResource('').then((item) => {
      this.setState({
        description: Object.keys(item),
      });
    });
  }

  render() {
    const { description } = this.state;
    return (
      <main className="main-content">
        <h2 className="title">This site is about:</h2>
        <div className="card-container">
          {description.map((item, index) => (
            <div className="card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </main>
    );
  }
}
