import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { MainPage } from './pages/main-page';
import { WithReactForm } from './pages/with-react-form';
import { WithoutReactForm } from './pages/without-react-form';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/withreactform" element={<WithReactForm />} />
        <Route path="/withoutreactform" element={<WithoutReactForm />} />
      </Routes>
    </Provider>
  );
}
