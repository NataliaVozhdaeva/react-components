import { Component } from 'react';
import { Header } from './components/header/header';
import { MainContent } from './components/main/main-content';
import ApiService from './services/api';

interface Item {
  id: number;
  dest: string;
  name: string | undefined;
  desc: number | string;
}

interface State {
  description: string[][] | Item[];
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
      if (!term) throw new Error('type several symbols');
      this.apiService.search(el, term).then((body) => {
        if (body.length > 0) {
          for (let i = 0; i < body.length; i++) {
            const newItem: Item = {
              id: 0,
              dest: '',
              name: '',
              desc: 0,
            };
            newItem.id = i;
            newItem.dest = el;
            newItem.name = body[i].name ? body[i].name : body[i].title;
            switch (true) {
              case el === 'people':
                newItem.desc = body[i].height;
                break;
              case el === 'planets':
                newItem.desc = body[i].population;
                break;
              case el === 'films':
                newItem.desc = body[i].opening_crawl;
                break;
              case el === 'species':
                newItem.desc = body[i].classification;
                break;
              case el === 'vehicles':
                newItem.desc = body[i].manufacturer;
                break;
              default:
                newItem.desc = body[i].starship_class;
                break;
            }
            newState.push(newItem);
          }
        }
      });
    }

    console.log(newState);

    /*  this.setState({
      description: newState,
    });  */
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
