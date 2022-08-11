import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { comments } from './mocks/comments';


import {
  films,
  promoFilm
} from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films = {films}
        promoFilm = {promoFilm}
        comments = {comments}
      />
    </Provider>
  </React.StrictMode>,
);
