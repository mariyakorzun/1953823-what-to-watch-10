import {store} from '../store/index';
import { Films, Film } from './film';
import { Comments } from './comment';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type FilmsData = {
  films: Films,
  promoFilm: Film,
  film: Film,
  similarFilms: Films,
  comments: Comments,
  favoriteFilms: Films,
  isDataLoading: boolean,
  isFilmLoading: boolean,
  areFavoriteFilmsLoading: boolean,
  isCommentBeingPosted: boolean,
};

export type UserAuthorization = {
   authorizationStatus: AuthorizationStatus,
   userData: UserData | undefined,
};

export type AppProcess = {
   currentGenre: string,
};
