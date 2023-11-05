import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getResource, search } from './services/api';
import { Item } from './services/interfaces';
import { Header } from './components/header/header';
import { MainPage } from './pages/main-page';
import { PeoplePage } from './pages/people-page';
import { SpeciesPage } from './pages/species-page';
import { StarshipsPage } from './pages/starships-page';
import { NotFoundPage } from './pages/not-found';

export function App(): JSX.Element {
  const [isDefault, setIsDefault] = useState(true);
  const [description, setDescription] = useState<Item[] | Item>([]);

  useEffect(() => {
    getData('');
  }, []);

  const getData = (url: string) => {
    getResource(url).then((body) => {
      setDescription(body);
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
      search(el, term).then((body) => {
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
          const zeroFound = { ['Sorry, try type something else']: '' };
          setIsDefault(true);
          setDescription(zeroFound);
        }
      });
    }
  };

  return (
    <>
      <Header callbackSearch={searchHandler} />

      <Routes>
        <Route
          path="/"
          element={<MainPage description={description} isDefault={isDefault} />}
        />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/species" element={<SpeciesPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
