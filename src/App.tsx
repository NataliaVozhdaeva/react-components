import { Component } from 'react';
import { Header } from './components/header/header';
import { MainContent } from './components/main/main-content';
import ApiService from './services/api';

interface State {
  description: string[][];
}

class App extends Component<State, { description: string[][] }> {
  apiService = new ApiService();

  constructor(props: State) {
    super(props);
    this.state = {
      description: [],
    };

    this.getData('');
  }

  getData(url: string) {
    this.apiService.getResource(url).then((body) => {
      this.setState({
        description: Object.entries(body),
      });
    });
  }

  searchHandler() {
    const term = document.querySelector('input')?.value;
    this.apiService.search(term).then((body) => {
      console.log(body);
    });
  }

  render() {
    const { description } = this.state;
    return (
      <>
        <Header searchHandler={() => this.searchHandler()} />
        <MainContent description={description} />
      </>
    );
  }
}

export default App;
