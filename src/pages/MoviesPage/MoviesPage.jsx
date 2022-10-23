import { useState, useEffect } from 'react';
import { getSearchMovie } from '../../services/movies.Api';
import { MovieGallery } from '../../components/MovieGallery/MovieGallery';
import { Status } from '../../utils/Status';
import { Loader } from '../../components/Loader/Loader';
import { Searchbar } from '../../components/SearchBar/SearchBar';
import { BtnLoadMore } from '../../components/BtnLoadMore/BtnLoadMore';
import toast, { Toaster } from 'react-hot-toast';

export function Movies() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.IDLE);
    if (query === '') {
      return;
    }
    async function searchMovies() {
      try {
        const fetchSearchMovies = await getSearchMovie(query, page);

        setMovies(prevState => [...prevState, ...fetchSearchMovies.results]);
        setTotalPages(fetchSearchMovies.total_pages);
        setStatus(Status.RESOLVED);

        if (fetchSearchMovies.results.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      } finally {
      }
    }
    searchMovies();
  }, [query, page]);

  const handleSearchFormSubmit = findQuery => {
    if (findQuery !== query) {
      setPage(1);
      setQuery(findQuery);
      setMovies([]);
    } else {
      toast('What to show you?', {
        icon: '👏',
      });
    }
  };

  const loadMore = () => {
    setPage(prevState => page + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (
        <div style={{ color: 'red' }}>{error}</div>
      )}
      {status === Status.RESOLVED && (
        <MovieGallery movies={movies} titleHeader={'Searching results:'} />
      )}

      {movies.length !== 0 && totalPages !== page && (
        <BtnLoadMore btnLoadMore={loadMore} />
      )}
      <Toaster position="top-left" />
    </div>
  );
}
