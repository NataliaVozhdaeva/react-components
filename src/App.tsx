import { Component } from 'react';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import ApiService from './services/api';

//https://swapi.dev/api/people/?search=r2
class App extends Component<object, { description: string[] }> {
  apiService = new ApiService();

  constructor(props: []) {
    super(props);
    this.getData();
    this.state = {
      description: [],
    };
  }

  getData() {
    this.apiService.getResource('').then((item: string) => {
      this.setState({
        description: Object.keys(item),
      });
    });
  }
  render() {
    return (
      <>
        <Header />
        <Main description={this.state.description} />
      </>
    );
  }
}

export default App;
