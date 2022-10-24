import { Routes, Route, Navigate } from 'react-router';
import { Home } from '../pages/HomePage/HomePage';
import { Movies } from '../pages/MoviesPage/MoviesPage';
// import { MovieDetailsPage } from '../pages/MovieDetailsPage/MovieDetailsPage';
import { AppBar } from './AppBar/AppBar';
import { AppContainer } from './App.styled';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

export function App() {
  return (
    <AppContainer>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        {/* <Route path="/Movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppContainer>
  );
}
