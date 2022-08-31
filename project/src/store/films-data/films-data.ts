import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmsData } from '../../types/state';
import { fetchFilmsAction,
  fetchPromoFilmAction,
  fetchFilmAction,
  fetchSimilarFilmsAction,
  fetchFilmCommentsAction,
  fetchFavoriteFilmsAction,
  postCommentAction,
  updateFilmFavoriteStatusAction
} from '../api-actions';


import { Film } from '../../types/film';

const initialState: FilmsData = {
  films: [],
  isDataLoading: false,
  promoFilm: {} as Film,
  film: {} as Film,
  similarFilms: [],
  comments: [],
  favoriteFilms: [],
  isFilmLoading: false,
  areFavoriteFilmsLoading: false,
  isCommentBeingPosted: false,
  isFilmBeingUpdated: false,
};

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoading = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isFilmLoading = false;
        state.film = {} as Film;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.similarFilms = [];
      })
      .addCase(fetchFilmCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchFilmCommentsAction.rejected, (state) => {
        state.comments = [];
      })
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.areFavoriteFilmsLoading = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.areFavoriteFilmsLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.rejected, (state) => {
        state.areFavoriteFilmsLoading = false;
        state.favoriteFilms = [];
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isCommentBeingPosted = true;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentBeingPosted = false;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isCommentBeingPosted = false;
      })
      .addCase(updateFilmFavoriteStatusAction.pending, (state) => {
        state.isFilmBeingUpdated = true;
      })
      .addCase(updateFilmFavoriteStatusAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmBeingUpdated = false;
      })
      .addCase(updateFilmFavoriteStatusAction.rejected, (state) => {
        state.isFilmBeingUpdated = false;
      });

  }
});
