import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import NotFoundPage from '../not-found-page/not-found-page';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import MyListButton from '../../components/my-list-button/my-list-button';
import { getComments } from '../../store/films-data/selectors';

function FilmPage(): JSX.Element {
  const navigate = useNavigate();
  const films = useAppSelector((state) => state.DATA.films);
  const comments = useAppSelector(getComments);
  const { id } = useParams();
  const film = films.find((item) => item.id.toString() === id);

  if (!film) {
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
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton filmId={film.id} filmStatus={film.isFavorite}/>
                <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <Tabs film={film} comments={comments}/>
      </section>
      <div className="page-content">
        <MoreLikeThis films={films} genre={film.genre}/>
        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
