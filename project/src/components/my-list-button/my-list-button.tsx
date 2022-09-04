import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilmStatus, getFavoriteFilms} from '../../store/films-data/selectors';
import {useEffect} from 'react';
import {addIsFavoriteAction, fetchFavoriteFilmsAction, updateFilmFavoriteStatusAction} from '../../store/api-actions';
import {FavoriteData} from '../../types/favorite-data';
import {useNavigate} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user-authorization/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';

 type MyListBtnProps = {
   filmID: string;
 }

function MyListButton({ filmID }: MyListBtnProps): JSX.Element {

  const favoriteFilmsLength = useAppSelector(getFavoriteFilms).length;
  const dispatch = useAppDispatch();
  const filmStatus = useAppSelector(getFilmStatus);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const addToFavorites = () => {
    const data: FavoriteData = {
      id: String(filmID),
      status: filmStatus,
    };
    dispatch(addIsFavoriteAction(data));
    dispatch(updateFilmFavoriteStatusAction(data));
  };

  const redirectToLoginClick = () => {
    const path = `${AppRoute.Login}`;
    navigate(path);
  };

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [filmStatus, dispatch]);

  const handleClickBtn = () => {
    if (authStatus === AuthorizationStatus.Auth) {
      return addToFavorites;
    }
    return redirectToLoginClick;
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClickBtn()}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        {
          filmStatus
            ? <use xlinkHref="#in-list" />
            : <use xlinkHref="#add" />
        }
      </svg>
      <span>My list</span>
      <span className="film-card__count">{
        authStatus === AuthorizationStatus.Auth ? favoriteFilmsLength : 0
      }
      </span>
    </button>
  );
}

export default MyListButton;
