import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import ErrorBoundary from './components/error-catch/error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import pageStore from './store/store-page';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={pageStore}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
