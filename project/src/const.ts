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
     Unknown = 'UNKNOWN',
 }

export enum Genre {
     All = 'All genres'
 }

export enum FilmTabName {
   Overview = 'OVERVIEW',
   Details = 'DETAILS',
   Reviews = 'REVIEWS'
 }
