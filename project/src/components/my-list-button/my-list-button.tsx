import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FavoriteStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateFilmFavoriteStatusAction } from '../../store/api-actions';
import { getFilmUpdatingStatus, getFavoriteFilms, getFilm } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-authorization/selectors';
import { useParams } from 'react-router-dom';

  type MyListButtonProps = {
    filmId: number,
    filmStatus: boolean,
  }

export default function MyListButton ({filmId, filmStatus}: MyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFilmBeingUpdated = useAppSelector(getFilmUpdatingStatus);
  const { id } = useParams();
  const film = useAppSelector(getFilm);

  const handleAddToFavoriteButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    if (id && !isFilmBeingUpdated) {
      if (film.isFavorite) {
        dispatch(updateFilmFavoriteStatusAction({
          filmId: id,
          status: FavoriteStatus.Delete,
        }));
      }

      dispatch(updateFilmFavoriteStatusAction({
        filmId: id,
        status: FavoriteStatus.Add,
      }));
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleAddToFavoriteButtonClick}>
      {film.isFavorite && authorizationStatus === AuthorizationStatus.Auth ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
      <span className="film-card__count">{authorizationStatus === AuthorizationStatus.Auth ? favoriteFilms.length : ''}</span>
    </button>
  );
}
