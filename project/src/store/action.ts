import { createAction } from '@reduxjs/toolkit';

export const chooseGenre = createAction('film/changeGenre',
  (value) => ({payload: value,}));

export const getFilms = createAction('genre/getFilms');

export const getPromoFilm = createAction('film/getPromoFilm');

export const getFilm = createAction(
  'film/getFilm',
  (value) => ({payload: value,})
);
