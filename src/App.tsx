import { Component } from 'react';
import { Header } from './components/header/header';
import { MainContent } from './components/main/main-content';
import ApiService from './services/api';

interface State {
  description: string[];
  isDefault: boolean;
}

class App extends Component<Record<string, never>, State> {
  apiService = new ApiService();

  state = {
    description: [],
    isDefault: true,
  };

  componentDidMount() {
    this.getData('');
  }

  newResult: string[] = [];
  getData(url: string) {
    this.apiService.getResource(url).then((body) => {
      this.setState({
        description: Object.keys(body),
      });
    });
  }

  searchHandler(term = '') {
    const fields = [
      'people',
      'planets',
      'films',
      'species',
      'vehicles',
      'starships',
    ];
    const newState: string[][] = [];
    for (const el of fields) {
      this.apiService.search(el, term).then((body) => {
        if (body.length > 0) {
          for (let i = 0; i < body.length; i++) {
            const newItem: string[] = [];
            newItem.push(el);
            body[i].name
              ? newItem.push(body[i].name)
              : newItem.push(body[i].title);
            switch (true) {
              case el === 'people':
                newItem.push(body[i].height);
                break;
              case el === 'planets':
                newItem.push(body[i].population);
                break;
              case el === 'films':
                newItem.push(body[i].opening_crawl);
                break;
              case el === 'species':
                newItem.push(body[i].classification);
                break;
              case el === 'vehicles':
                newItem.push(body[i].body[i].manufacturer);
                break;
              default:
                newItem.push(body[i].starship_class);
                break;
            }
            newState.push(newItem);
          }
        }
        this.setState({
          isDefault: false,
          description: newState.flat(),
        });
      });
    }
  }

  render() {
    const description = this.state.description;
    return (
      <>
        <Header
          description={this.state.description}
          callbackSearch={this.searchHandler.bind(this)}
        />
        <MainContent description={description} />
      </>
    );
  }
}

export default App;
