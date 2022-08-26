import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const avatarUrl = useAppSelector((state) => state.USER.userData?.avatarUrl);
  const dispatch = useAppDispatch();

  if ( authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
            to={AppRoute.Main}
            className="user-block__link"
          >
             Sign out
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <div className="user-block">
      <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
    </div>
  );
}

export default UserBlock;
