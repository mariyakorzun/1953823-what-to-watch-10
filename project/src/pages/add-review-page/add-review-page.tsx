import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { useAppSelector } from '../../hooks/index';

function AddReview(): JSX.Element {
  const film = useAppSelector((state) => state.commonReducer.film);
  const {name, backgroundImage, previewImage} = film;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="#">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={previewImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />
    </section>
  );
}

export default AddReview;
