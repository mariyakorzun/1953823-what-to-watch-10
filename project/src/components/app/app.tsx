import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FilmPage from '../../pages/film-page/film-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { Film, Films } from '../../types/film';

 type AppProps = {
   promoFilm: Film;
   films: Films;
 }

function App({promoFilm, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              promoFilm={promoFilm}
              films={films}
            />
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Film} element={<FilmPage films={films}/>} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage films={films}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.AddReview} element={ <AddReviewPage name={films[0].name} backgroundImage={films[0].backgroundImage} previewImage={films[0].previewImage}/>} />
        <Route path={AppRoute.Player} element={<PlayerPage name={films[0].name} posterImage={films[0].posterImage} videoLink={films[0].videoLink}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
