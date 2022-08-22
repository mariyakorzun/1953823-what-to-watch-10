import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film';

export const chooseGenre = createAction('data/changeGenre',
  (value) => ({payload: value,})
);

export const getFilms = createAction<Films>('data/getFilms');

export const getPromoFilm = createAction('data/getPromoFilm');

export const getFilm = createAction('data/getFilm',
  (value) => ({payload: value,})
);
export const getFavoriteFilms = createAction('data/getFavoriteFilms');

export const setError = createAction<string | null>('data/setError');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
