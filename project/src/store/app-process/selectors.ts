import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCurrentGenre = (state: State): string => state[NameSpace.App].currentGenre;
