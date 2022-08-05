import {createReducer} from '@reduxjs/toolkit';
import {chooseGenre, getFilms} from './action';
import { films } from '../mocks/films';
import { Films } from '../types/film';
import { Genre } from '../const';

const initialState: {
   genre: string,
   filmList: Films,
 } = {
   genre: Genre.All,
   filmList: films,
 };

const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(chooseGenre, (state, action) => {
        const {genre} = action.payload;
        state.genre = genre;
      })
      .addCase(getFilms, (state) => {
        state.filmList = state.genre === Genre.All
          ? films :
          films.filter((film) => film.genre === state.genre);
      });
  }
);

export {reducer};
