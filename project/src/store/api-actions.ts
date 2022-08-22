import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Films } from '../types/film';
import { setError } from './action';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from './';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   'data/fetchFilms',
   async (_arg, {dispatch, extra: api}) => {
     const {data} = await api.get<Films>(APIRoute.Films);
     return data;
   },
 );
