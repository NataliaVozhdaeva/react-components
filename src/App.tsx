import { Component } from 'react';
import { Header } from './components/header/header';
import { MainContent } from './components/main/main-content';
import ApiService from './services/api';

interface State {
  description: string[];
  isDefault: boolean;
}

class App extends Component<
  State,
  { description: string[]; isDefault: boolean }
> {
  apiService = new ApiService();

  constructor(props: State) {
    super(props);
    this.getData();
    this.state = {
      description: [],
      isDefault: true,
    };
  }

  getData() {
    this.apiService.getResource('').then((item: string) => {
      this.setState({
        description: Object.keys(item),
      });
    });
  }

  searchHandler() {
    console.log('search');
  }

  render() {
    const { description } = this.state;

    return (
      <>
        <Header searchHandler={this.searchHandler} />
        <MainContent description={description} />
      </>
    );
  }
}

export default App;
