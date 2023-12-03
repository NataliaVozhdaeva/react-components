import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { MainPage } from './pages/main-page';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/withreactform" />
          <Route path="/withoutreactform" />
        </Route>
      </Routes>
    </Provider>
  );
}
