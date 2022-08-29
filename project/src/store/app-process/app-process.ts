import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, ALL_GENRES } from '../../const';
import { AppProcess } from '../../types/state';

const initialState: AppProcess = {
  currentGenre: ALL_GENRES,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.currentGenre = action.payload;
    }
  },
});

export const { changeGenre } = appProcess.actions;
