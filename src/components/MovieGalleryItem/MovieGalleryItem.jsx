// import PropTypes from 'prop-types';
import { BASE_URL_IMG } from '../../services/movies.Api';
import fallback from '../../images/fallback.jpg';
import { Link } from 'react-router-dom';

export const MovieGalleryItem = ({ id, title, poster_path }, locationState) => {
  return (
    <Link to={`${BASE_URL_IMG}movies/${id}`} state={{ from: locationState }}>
      <li data-id={id}>
        <img
          src={poster_path ? `${BASE_URL_IMG}${poster_path}` : fallback}
          alt={title}
        />

        <p>{title}</p>
      </li>
    </Link>
  );
};
