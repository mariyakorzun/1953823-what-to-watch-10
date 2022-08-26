export enum AppRoute {
     Main = '/',
     Login = '/login',
     Film = '/films/:id',
     MyList = '/mylist',
     AddReview = '/films/:id/review',
     Player = '/player/:id'
 }

export enum AuthorizationStatus {
     Auth = 'AUTH',
     NoAuth = 'NO_AUTH',
     Unknown = 'UNKNOWN'
 }

export const ALL_GENRES = 'All genres';

export enum FilmTabName {
   Overview = 'OVERVIEW',
   Details = 'DETAILS',
   Reviews = 'REVIEWS'
 }

export enum APIRoute {
   Films = '/films',
   Login = '/login',
   Logout = '/logout'
 }

export enum NameSpace {
   Data = 'DATA',
   User = 'USER'
 }

export const FILMS_RENDERING_STEP = 8;
