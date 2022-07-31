import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';


type LogoProps = {
   logoStyle?: 'light';
 }

function Logo({logoStyle}: LogoProps): JSX.Element {
  const logoClass = logoStyle === 'light' ? 'logo__link logo__link--light' : 'logo__link';
  return (
    <div className="logo">
      <Link className={logoClass} to={AppRoute.Main}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
