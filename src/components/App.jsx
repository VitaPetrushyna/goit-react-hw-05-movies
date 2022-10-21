import { Routes, Route } from 'react-router';
import { Home } from '../pages/HomePage/HomePage';
import { Movies } from '../pages/MoviesPage/MoviesPage';
import { AppBar } from './AppBar/AppBar';

export function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>
    </div>
  );
}
