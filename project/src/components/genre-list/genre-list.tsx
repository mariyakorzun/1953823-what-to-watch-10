import { chooseGenre } from '../../store/action';
import { Link } from 'react-router-dom';
import { Films } from '../../types/film';
import { ALL_GENRES } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';

type GenreListProps = {
   filmData: Films;
   resetFilmsCount: () => void;
};

function GenreList({filmData, resetFilmsCount}: GenreListProps): JSX.Element {
  const { currentGenre } = useAppSelector((state) => state.commonReducer);
  const genreListSet = new Set(filmData.map((film) => film.genre));
  const genreList = [...genreListSet];
  genreList.unshift(ALL_GENRES);

  const dispatch = useAppDispatch();

  const handleGenreChange = (genre: string) => {
    dispatch(chooseGenre(genre));
    resetFilmsCount();
  };

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => (
        <li
          key={genre}
          className={genre === currentGenre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
          onClick={() => handleGenreChange(genre)}
        >
          <Link to="#" className="catalog__genres-link">{genre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
