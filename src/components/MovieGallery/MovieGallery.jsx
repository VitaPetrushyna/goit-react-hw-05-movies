// import PropTypes from 'prop-types';
import { MovieGalleryItem } from '../MovieGalleryItem/MovieGalleryItem';
import { MoviesList } from './MovieGallery.styled';

export const MovieGallery = ({ movies, titleHeader, locationState }) => (
  <>
    <h2>{titleHeader}</h2>
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
