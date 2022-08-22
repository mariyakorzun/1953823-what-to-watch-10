import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className='page-not-found'>
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to={AppRoute.Main}>Back to the homepage</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
