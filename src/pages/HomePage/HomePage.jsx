import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovie } from '../../services/movies.Api';
import { MovieGallery } from '../../components/MovieGallery/MovieGallery';
import { Status } from '../../utils/Status';
import { Loader } from '../../components/Loader/Loader';

export const Home = () => {
  // const [page, setPage] = useState(1);
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    async function searchMovies() {
      try {
        const fetchMovies = await getTrendingMovie();

        setMovies(fetchMovies.results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      } finally {
      }
    }
    searchMovies();
  }, []);

  return (
    <>
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (
        <div style={{ color: 'red' }}>{error}</div>
      )}
      {status === Status.RESOLVED && movies && (
        <MovieGallery
          movies={movies}
          title={'Trending today:'}
          locationState={location}
        />
      )}
    </>
  );
};
