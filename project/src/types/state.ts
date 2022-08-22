import {store} from '../store/index';
import { Films } from './film';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type FilmsData = {
   films: Films,
   isDataLoading: boolean,
 };
