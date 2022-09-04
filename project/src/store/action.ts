import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const redirectToRoute = createAction<AppRoute | string>('app/redirectToRoute');

export const setFilm = createAction('film/setFilm', (value) => ({
  payload: value,
}));
