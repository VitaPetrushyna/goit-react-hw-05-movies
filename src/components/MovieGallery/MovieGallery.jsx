// import PropTypes from 'prop-types';
import { MovieGalleryItem } from '../MovieGalleryItem/MovieGalleryItem';

export const MovieGallery = ({ movies, title, locationState }) => (
  <ul>
    <h2>{title}</h2>
    {movies.map(({ id, title }) => (
      <MovieGalleryItem key={id} title={title} locationState={locationState} />
    ))}
  </ul>
);
