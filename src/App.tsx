import { useState, useEffect } from 'react';
import ApiService from './services/api';
import { Header } from './components/header/header';
import { MainContent } from './components/main/main-content';
import { Item } from './services/interfaces';

export function App(): JSX.Element {
  const [isDefault, setIsDefault] = useState(true);
  const [description, setDescription] = useState<string[] | Item[]>([]);

  useEffect(() => {
    getData('');
  }, []);

  const apiService = new ApiService();

  const getData = (url: string) => {
    apiService.getResource(url).then((body) => {
      setDescription(body);
      console.log(body);
    });
  };

  const searchHandler = (term = '') => {
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
      apiService.search(el, term).then((body) => {
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
          setIsDefault(false);
          setDescription(newState.flat());
        } else {
          const zeroFound = ['Sorry, try type something else'];
          setIsDefault(true);
          setDescription(zeroFound);
        }
      });
    }
  };

  return (
    <>
      <Header callbackSearch={searchHandler} />
      <MainContent description={description} isDefault={isDefault} />
    </>
  );
}
