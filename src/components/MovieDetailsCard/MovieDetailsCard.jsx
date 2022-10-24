import { BASE_URL_IMG } from 'services/movies.Api';
import fallback from '../../images/fallback.jpg';

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
      <img
        src={poster_path ? `${BASE_URL_IMG}/${poster_path}` : fallback}
        alt={title}
      />
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
    </>
  );
};
