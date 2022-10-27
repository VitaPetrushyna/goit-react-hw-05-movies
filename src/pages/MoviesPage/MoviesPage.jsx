import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../../services/movies.Api';
import { MovieGallery } from '../../components/MovieGallery/MovieGallery';
import { Status } from '../../utils/Status';
import { Loader } from '../../components/Loader/Loader';
import { Searchbar } from '../../components/SearchBar/SearchBar';
import { BtnLoadMore } from '../../components/BtnLoadMore/BtnLoadMore';
import toast, { Toaster } from 'react-hot-toast';

const Movies = () => {
  const [page, setPage] = useState(1);
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [status, setStatus] = useState(Status.IDLE);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    // setStatus(Status.IDLE);
    if (!searchQuery) {
      return;
    }
    async function searchMovies() {
      setStatus(Status.PENDING);
      try {
        const fetchSearchMovies = await getSearchMovie(searchQuery, page);

        if (fetchSearchMovies.results.length === 0) {
          setStatus(Status.REJECTED);
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }

        setMovies(prevState => [...prevState, ...fetchSearchMovies.results]);
        setTotalPages(fetchSearchMovies.total_pages);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }
    searchMovies();
  }, [searchQuery, page]);

  const handleSubmit = query => {
    // if (!query.trim()) {
    //   setMovies(null);
    //   toast.info('Please, enter search query.');
    // }
    setSearchParams({ query });
  };

  const loadMore = () => {
    setPage(prevState => page + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (
        <div style={{ color: 'red' }}>{error}</div>
      )}
      {status === Status.RESOLVED && movies && (
        <MovieGallery
          movies={movies}
          titleHeader={'Searching results'}
          locationState={location}
        />
      )}

      {movies.length !== 0 && totalPages !== page && (
        <BtnLoadMore btnLoadMore={loadMore} />
      )}
      <Toaster position="top-center" />
    </div>
  );
};

export default Movies;
