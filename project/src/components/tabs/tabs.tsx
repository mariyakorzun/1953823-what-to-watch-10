import { Film } from '../../types/film';
import { Comments } from '../../types/comment';
import {useState} from 'react';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import { FilmTabName } from '../../const';

 type TabsProps = {
   film: Film;
   comments: Comments;
 }

function Tabs({film, comments}: TabsProps): JSX.Element {
  const [currentTab, setTab] = useState(FilmTabName.Overview);

  const renderTab = (tab: FilmTabName): JSX.Element => {
    switch (tab) {
      case FilmTabName.Details:
        return <FilmDetails film={film}/>;
      case FilmTabName.Reviews:
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
              <li className={`film-nav__item${currentTab === FilmTabName.Overview ? ' film-nav__item--active' : ''}`}>
                <a onClick={() => setTab(FilmTabName.Overview)} className="film-nav__link" style={{cursor: 'pointer'}}>Overview</a>
              </li>
              <li className={`film-nav__item${currentTab === FilmTabName.Details ? ' film-nav__item--active' : ''}`}>
                <a onClick={() => setTab(FilmTabName.Details)} className="film-nav__link" style={{cursor: 'pointer'}}>Details</a>
              </li>
              <li className={`film-nav__item${currentTab === FilmTabName.Reviews ? ' film-nav__item--active' : ''}`}>
                <a onClick={() => setTab(FilmTabName.Reviews)} className="film-nav__link" style={{cursor: 'pointer'}}>Reviews</a>
              </li>
            </ul>
          </nav>

          {renderTab(currentTab)}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
