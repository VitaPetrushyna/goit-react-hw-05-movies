import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovie } from '../../services/movies.Api';
import { MovieGallery } from '../../components/MovieGallery/MovieGallery';
import { Status } from '../../utils/Status';
import { Loader } from '../../components/Loader/Loader';
import { BtnLoadMore } from '../../components/BtnLoadMore/BtnLoadMore';

const Home = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    async function trendingMovies() {
      try {
        const fetchMovies = await getTrendingMovie(page);

        setMovies(prevState => [...prevState, ...fetchMovies.results]);
        setTotalPages(fetchMovies.total_pages);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      } finally {
        // setLoading(false);
      }
    }
    trendingMovies(page);
  }, [page]);

  const loadMore = () => {
    setPage(prevState => page + 1);
  };

  return (
    <>
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      {/* {loading && <Loader />} */}
      {status === Status.REJECTED && (
        <div style={{ color: 'red' }}>{error}</div>
      )}
      {status === Status.RESOLVED && (
        <MovieGallery
          movies={movies}
          titleHeader={'Trending today'}
          locationState={location}
        />
      )}
      {movies.length !== 0 && totalPages !== page && (
        <BtnLoadMore btnLoadMore={loadMore} />
      )}
    </>
  );
};

export default Home;
