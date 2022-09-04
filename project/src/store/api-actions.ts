import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Films, Film } from '../types/film';
import { Comments, UserComment } from '../types/comment';
import { redirectToRoute, setFilm } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';
import { FavoriteData } from '../types/favorite-data';

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

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchFilmCommentsAction = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Favorite);
    return data;
  },
);

export const addIsFavoriteAction = createAsyncThunk<Film, FavoriteData, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   'favorite/addToFavorite',
   async ({ id, status }, { dispatch, extra: api }) => {
     const { data } = await api.post<Film>(`${APIRoute.Favorite}/${id}/${Number(!status)}`);
     dispatch(setFilm(data));
     return data;
   }
 );

export const updateFilmFavoriteStatusAction = createAsyncThunk<Film, FavoriteData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addFilmToFavorites',
  async ({ id, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${id}/${Number(!status)}`);
    dispatch(fetchFavoriteFilmsAction());
    dispatch(redirectToRoute(AppRoute.MyList));
    return data;
  },
);

export const postCommentAction = createAsyncThunk<Comments, {filmId: string, comment: UserComment}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postComment',
  async ({filmId, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comments>(`${APIRoute.Comments}/${filmId}`, comment);
    dispatch(redirectToRoute(`/films/${filmId}`));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   'user/checkAuth',
   async (_arg, {dispatch, extra: api}) => {
     await api.get(APIRoute.Login);
   },
 );

export const loginAction = createAsyncThunk<UserData, AuthData, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   'user/login',
   async ({email, password}, {dispatch, extra: api}) => {
     const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
     saveToken(data.token);
     dispatch(redirectToRoute(AppRoute.Main));
     return data;
   },
 );

export const logoutAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch,
   state: State,
   extra: AxiosInstance
 }>(
   'user/logout',
   async (_arg, {dispatch, extra: api}) => {
     await api.delete(APIRoute.Logout);
     dropToken();
   },
 );
