import { Films } from '../../types/film';
import FilmCardList from '../film-card-list/film-card-list';

 type MoreLikeThisProps = {
   films: Films;
   genre: string;
 }

const SIMILAR_FILMS_COUNT = 4;

function MoreLikeThis({films, genre}: MoreLikeThisProps): JSX.Element {
  const similarFilms = films.filter((film) => film.genre === genre).slice(0, SIMILAR_FILMS_COUNT);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmCardList films={similarFilms}/>
    </section>
  );
}

export default MoreLikeThis;
