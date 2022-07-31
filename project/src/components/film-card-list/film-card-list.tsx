import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { Films } from '../../types/film';

 type FilmCardListProps = {
   films: Films;
 };

function FilmCardList(props: FilmCardListProps): JSX.Element {
  const { films } = props;

  const [ ,setActiveFilmCard ] = useState<number|undefined>();

  const onMouseEnter = (filmId: number) => {
    setActiveFilmCard(filmId);
  };

  const onMouseLeave = () => {
    setActiveFilmCard(undefined);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (<FilmCard key={film.id} id={film.id} name={film.name} previewImage={film.previewImage} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>))}
    </div>
  );
}

export default FilmCardList;
