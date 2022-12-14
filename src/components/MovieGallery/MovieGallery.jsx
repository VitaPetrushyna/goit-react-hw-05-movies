import PropTypes from 'prop-types';
import { MovieGalleryItem } from '../MovieGalleryItem/MovieGalleryItem';
import { MoviesList, TitleHeader } from './MovieGallery.styled';

export const MovieGallery = ({ movies, titleHeader, locationState }) => (
  <>
    <TitleHeader>{titleHeader}</TitleHeader>
    <MoviesList>
      {movies.map(movie => (
        <MovieGalleryItem
          key={movie.id}
          title={movie.title}
          movie={movie}
          locationState={locationState}
        />
      ))}
    </MoviesList>
  </>
);

MovieGallery.propTypes = {
  titleHeader: PropTypes.string,
  locationState: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
