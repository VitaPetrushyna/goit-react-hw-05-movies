import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsMovie } from '../../services/movies.Api';
import toast from 'react-hot-toast';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function searchCreditsMovies() {
      try {
        const fetchCreditsMovies = await getCreditsMovie(movieId);
        setCast(fetchCreditsMovies.cast);

        if (!fetchCreditsMovies) {
          toast.error('Sorry, there is no information about this film');
        }
      } catch (error) {
        console.log(error);
      }
    }
    searchCreditsMovies(movieId);
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
              />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
