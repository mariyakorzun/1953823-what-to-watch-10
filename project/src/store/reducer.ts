import {createReducer} from '@reduxjs/toolkit';
import {chooseGenre, getFilms, getPromoFilm} from './action';
import { films, promoFilm } from '../mocks/films';
import { Films, Film } from '../types/film';
//import { Genre } from '../const';

const initialState: {
  currentGenre: string;
  films: Films;
  promoFilm: Film;
 } = {
   currentGenre: 'All genres',
   films,
   promoFilm,
 };

const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(chooseGenre, (state, action) => {
        const {genre} = action.payload;
        state.currentGenre = genre;
      })
      .addCase(getFilms, (state) => {
        state.films = films;
      })
      .addCase(getPromoFilm, (state) => {
        state.promoFilm = promoFilm;
      });
  }
);

export {reducer};
