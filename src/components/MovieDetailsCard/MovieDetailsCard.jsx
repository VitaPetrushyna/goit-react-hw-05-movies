import PropTypes from 'prop-types';
import { BASE_URL_IMG } from 'services/movies.Api';
import fallback from '../../images/fallback.jpg';
import {
  MovieDetails,
  MovieDetailsImage,
  MovieDetailsText,
} from './MovieDetailsCard.styled';

export const MovieDetailsCard = ({
  movie: {
    title,
    release_date,
    genres,
    overview = '',
    poster_path,
    vote_average,
  },
}) => {
  const userRating = vote_average * 10;
  const yearData = release_date.slice(0, 4);

  return (
    <>
      <MovieDetails>
        <MovieDetailsImage>
          <img
            src={poster_path ? `${BASE_URL_IMG}/${poster_path}` : fallback}
            alt={title}
          />
        </MovieDetailsImage>
        <MovieDetailsText>
          <h3>
            {title} ({yearData})
          </h3>
          <p>User Score: {userRating}%</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          {genres.map(({ id, name }) => (
            <span key={id}>{name} </span>
          ))}
        </MovieDetailsText>
      </MovieDetails>
    </>
  );
};

MovieDetailsCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
