import { Routes, Route, Navigate } from 'react-router';
import { Home } from '../../pages/HomePage/HomePage';
import { Movies } from '../../pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from '../../pages/MovieDetailsPage/MovieDetailsPage';

import { Layout } from '../Layout/Layout';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
