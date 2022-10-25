import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { SharedLayout } from '../Layout/Layout';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
