import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getDetailsMovie } from '../../services/movies.Api';
import { MovieDetailsCard } from '../../components/MovieDetailsCard/MovieDetailsCard';
import { Status } from '../../utils/Status';
import { Loader } from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import {
  StyledList,
  BackLink,
  Additional,
  AdditionalNav,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const location = useLocation();
  // const backLinkHref = location?.state?.from ?? '/';

  useEffect(() => {
    async function searchDetailsMovies() {
      setStatus(Status.PENDING);
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
          <BackLink to={'/'}>Go back</BackLink>

          <MovieDetailsCard movie={movie} />
          <Additional>
            <p>Additional information</p>
            <AdditionalNav>
              <StyledList
                to="reviews"
                state={{ from: location?.state?.from ?? '/' }}
              >
                Reviews
              </StyledList>

              <StyledList
                to="cast"
                state={{ from: location?.state?.from ?? '/' }}
              >
                Cast
              </StyledList>
            </AdditionalNav>
          </Additional>

          <Suspense fallback="">
            <Outlet />
          </Suspense>
          <Toaster position="top-left" />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
