import { Component } from 'react';
import { ApiService } from '../../services/api';
import './main.css';

export class Main extends Component<
  object,
  { name: string; description: string }
> {
  apiService = new ApiService();

  constructor(props: []) {
    super(props);
    this.getData();

    this.state = {
      name: '',
      description: '',
    };
  }

  getData() {
    this.apiService.getPerson('1').then((person) => {
      this.setState({
        name: person.name,
        description: `
        height - ${person.height},
        mass - ${person.mass},
        hair color - ${person.hair_color},
        eye color - ${person.eye_color}`,
      });
    });
  }

  render() {
    const { name, description } = this.state;

    return (
      <main className="main-content">
        <div className="card">
          <div className="name">
            <span>Name: </span>
            <span>{name}</span>
          </div>
          <div className="name">
            <span>Description: </span>
            <div>{description}</div>
          </div>
        </div>
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
      </main>
    );
  }
}
