import PropTypes from 'prop-types';
import { BASE_URL_IMG } from '../../services/movies.Api';
import fallback from '../../images/fallback.jpg';
import { Link } from 'react-router-dom';

export const MovieGalleryItem = (
  { movie: { id, poster_path, title, overview } },
  locationState
) => {
  return (
    <li data-id={id}>
      <Link to={`/movies/${id}`} state={{ from: locationState }}>
        <img
          src={poster_path ? `${BASE_URL_IMG}/${poster_path}` : fallback}
          alt={title}
          overview={overview}
        />
        <div>
          <h3>{title}</h3>
          <p>{`${overview.slice(0, 50)}...`}</p>
        </div>
      </Link>
    </li>
  );
};

MovieGalleryItem.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ),
};
