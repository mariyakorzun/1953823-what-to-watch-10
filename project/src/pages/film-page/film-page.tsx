import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import NotFoundPage from '../not-found-page/not-found-page';

import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link, useParams } from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import MyListButton from '../../components/my-list-button/my-list-button';
import { getComments, getFilm } from '../../store/films-data/selectors';
import {useEffect} from 'react';
import {fetchFilmAction, fetchSimilarFilmsAction, fetchFilmCommentsAction} from '../../store/api-actions';

function FilmPage(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.DATA.films);
  const comments = useAppSelector(getComments);
  const film = useAppSelector(getFilm);
  const {backgroundImage, name, genre, released, id } = film;
  const filmID = String(id);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchFilmAction(params.id));
      dispatch(fetchSimilarFilmsAction(params.id));
      dispatch(fetchFilmCommentsAction(params.id));
    }
  }, [dispatch, params.id]);

  if (!name) {
    return <NotFoundPage />;
  }

  const handlePlayButtonClick = () => {
    navigate(`/player/${id}`);
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <MyListButton filmID={filmID}/>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>

              </div>
            </div>
          </div>
        </div>

        <Tabs film={film} comments={comments}/>
      </section>
      <div className="page-content">
        <MoreLikeThis films={films} genre={genre}/>
        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
