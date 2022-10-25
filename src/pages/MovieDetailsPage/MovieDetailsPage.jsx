import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { getDetailsMovie } from '../../services/movies.Api';
import { MovieDetailsCard } from '../../components/MovieDetailsCard/MovieDetailsCard';
import { Status } from '../../utils/Status';
import { Loader } from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { StyledList } from './MovieDetailsPage.styled';

export function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    async function searchDetailsMovies() {
      try {
        const fetchDetailsMovies = await getDetailsMovie(movieId);

        setMovie(fetchDetailsMovies);
        setStatus(Status.RESOLVED);

        if (!fetchDetailsMovies) {
          toast.error('Sorry, there is no information about this film');
        }
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }
    searchDetailsMovies(movieId);
  }, [movieId]);

  return (
    <div>
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && (
        <div style={{ color: 'red' }}>{error}</div>
      )}
      {status === Status.RESOLVED && movie && (
        <>
          <Link to={location?.state?.from ?? '/'}>Go back</Link>
          <div>
            <MovieDetailsCard movie={movie} />
            <div>
              <p>Additional information</p>
              <StyledList to="reviews">Reviews</StyledList>
              <StyledList to="cast">Cast</StyledList>
            </div>

            <Suspense fallback="">
              <Outlet />
            </Suspense>
            <Toaster position="top-left" />
          </div>
        </>
      )}
    </div>
  );
}
