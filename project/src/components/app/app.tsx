import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FilmPage from '../../pages/film-page/film-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const isDataLoading = useAppSelector((state) => state.DATA.isDataLoading);

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage/>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Film} element={<FilmPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.AddReview} element={ <AddReviewPage />} />
        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
