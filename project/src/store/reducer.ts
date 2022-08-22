import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { chooseGenre, getPromoFilm, getFavoriteFilms, setError, getFilm} from './action';
import { films, promoFilm } from '../mocks/films';
import { Films, Film } from '../types/film';
import { Comments } from '../types/comment';
import { comments } from '../mocks/comments';
import { NameSpace } from '../const';
import { filmsData } from './films-data/films-data';


type InitialState = {
  currentGenre: string;
  promoFilm: Film;
  favoriteFilms: Films;
  film: Film;
  comments: Comments;
  error: string | null;
 }

const initialState: InitialState = {
  currentGenre: 'All genres',
  promoFilm,
  favoriteFilms: films,
  film: films[3],
  comments,
  error: null,
};

const commonReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(chooseGenre, (state, action) => {
        state.currentGenre = action.payload;
      })
      .addCase(getFilm, (state, action) => {
        state.film = films[action.payload];
      })
      .addCase(getPromoFilm, (state) => {
        state.promoFilm = promoFilm;
      })
      .addCase(getFavoriteFilms, (state) => {
        state.favoriteFilms = films;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      });
  }
);

export const reducer = combineReducers({
  [NameSpace.Data]: filmsData.reducer,
  commonReducer,
});
