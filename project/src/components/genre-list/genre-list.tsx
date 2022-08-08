import { chooseGenre, getFilms } from '../../store/action';

import { Films } from '../../types/film';
import { Genre } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';

type GenreListProps = {
   filmData: Films;
};

function GenreList({filmData}: GenreListProps): JSX.Element {
  const genreList = [Genre.All, ...filmData.map((film) => film.genre)];
  const uniqueGenreList = [...new Set(genreList)];

  const { currentGenre } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {uniqueGenreList.map((genre) => (
        <li
          key={genre}
          className={genre === currentGenre
            ? 'catalog__genres-item catalog__genres-item--active'
            : 'catalog__genres-item'}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(e) => {
              e.preventDefault();
              dispatch(chooseGenre({genre}));
              dispatch(getFilms());
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
