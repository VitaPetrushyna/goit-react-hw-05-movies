import { useState, useEffect } from 'react';
import { getTrendingMovie } from '../../services/movies.Api';

export const Home = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function searchMovies() {
      try {
        const fetchMovies = await getTrendingMovie();

        setMovies(prevState => [fetchMovies]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, []);

  return;
};
