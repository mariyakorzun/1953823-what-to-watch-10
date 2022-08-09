import { Film } from '../../types/film';
import { Comments } from '../../types/comment';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';

 type TabsProps = {
   film: Film;
   comments: Comments;
 }

function Tabs({film, comments}: TabsProps): JSX.Element {
  const { tab } = useParams();

  const renderTab = () => {
    switch (tab) {
      case 'details':
        return <FilmDetails film={film}/>;
      case 'reviews':
        return <FilmReviews comments={comments}/>;
      default:
        return <FilmOverview film={film}/>;
    }
  };

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              <li className={tab === 'overview' || tab === undefined ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
                <Link to={'overview'} className="film-nav__link">Overview</Link>
              </li>
              <li className={tab === 'details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
                <Link to={'details'} className="film-nav__link">Details</Link>
              </li>
              <li className={tab === 'reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
                <Link to={'reviews'} className="film-nav__link">Reviews</Link>
              </li>
            </ul>
          </nav>

          {renderTab()}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
