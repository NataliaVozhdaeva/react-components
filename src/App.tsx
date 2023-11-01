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
    this.state = {
      description: [],
      isDefault: true,
    };
  }

  newResult: string[] = [];
  getData(url: string) {
    this.apiService.getResource(url).then((body) => {
      this.setState({
        description: Object.keys(body),
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
    const newState: string[][] = [];

    for (const el of fields) {
      if (!term) throw new Error('type several symbols');
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
      });
    }

    this.setState({
      isDefault: false,
      description: newState.flat(),
    });
  }

  updateMain() {
    const description = this.state.description;
    console.log(description);
  }

  componentDidMount() {
    this.getData('');
  }

  componentDidUpdate(prevState: State) {
    if (this.state.isDefault !== prevState.isDefault) {
      this.updateMain();
    }
  }

  render() {
    const { description, isDefault } = this.state;
    return (
      <>
        <Header searchHandler={() => this.searchHandler()} />
        <MainContent description={description} state={isDefault} />
      </>
    );
  }
}

export default App;
