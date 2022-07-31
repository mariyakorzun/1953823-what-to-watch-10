import { Link } from 'react-router-dom';

 type FilmCardProps = {
   id: number;
   name: string;
   previewImage: string;
   onMouseEnter: (filmId: number) => void;
   onMouseLeave: () => void;
 };

function FilmCard(props: FilmCardProps): JSX.Element {
  const { id, name, previewImage } = props;
  const { onMouseEnter, onMouseLeave } = props;
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave()}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
