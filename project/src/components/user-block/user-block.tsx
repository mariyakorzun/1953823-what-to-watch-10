import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserData } from '../../store/user-authorization/selectors';

function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const avatarUrl = userData?.avatarUrl;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <div className="user-block">
        <Link to={'/login'} className="user-block__link">Sign in</Link>
      </div>
    );
  }
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div onClick={() => navigate(AppRoute.MyList)} className="user-block__avatar">
          <img src={avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <div onClick={handleLogout} className="user-block__link">Sign out</div>
      </li>
    </ul>
  );
}

export default UserBlock;
