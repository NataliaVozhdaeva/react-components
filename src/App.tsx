import { Component } from 'react';
import { Header } from './components/header/header';
import { MainContent } from './components/main/main-content';
import ApiService from './services/api';
import { State, Item } from './services/interfaces';

class App extends Component<Record<string, never>, State> {
  apiService = new ApiService();

  state = {
    description: [],
    isDefault: true,
  };

  componentDidMount() {
    this.getData('');
  }

  getData(url: string) {
    this.apiService.getResource(url).then((body) => {
      this.setState({
        description: body,
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
    const newState: Item[] = [];
    for (const el of fields) {
      this.apiService.search(el, term).then((body) => {
        if (body.length > 0) {
          for (let i = 0; i < body.length; i++) {
            const newItem: Item = {
              'this is': '',
              'name or title': '',
            };
            newItem['this is'] = el;
            newItem['name or title'] = body[i].name
              ? body[i].name
              : body[i].title;
            switch (true) {
              case el === 'people':
                newItem.height = body[i].height;
                break;
              case el === 'planets':
                newItem.population = body[i].population;
                break;
              case el === 'films':
                newItem['opening crawl'] = body[i].opening_crawl;
                break;
              case el === 'species':
                newItem.language = body[i].language;
                break;
              case el === 'vehicles':
                newItem.manufacturer = body[i].manufacturer;
                break;
              default:
                newItem['starship class'] = body[i].starship_class;
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
    return (
      <>
        <Header callbackSearch={this.searchHandler.bind(this)} />
        <MainContent
          description={this.state.description}
          isDefault={this.state.isDefault}
        />
      </>
    );
  }
}

export default App;
