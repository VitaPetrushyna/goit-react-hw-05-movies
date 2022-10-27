import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsMovie } from '../../services/movies.Api';

import { CastGallery, Notice } from './Cast.styled';
import fallback from '../../images/fallback.jpg';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function searchCreditsMovies() {
      try {
        const fetchCreditsMovies = await getCreditsMovie(movieId);
        setCast(fetchCreditsMovies.cast);
      } catch (error) {
        console.log(error);
      }
    }
    searchCreditsMovies(movieId);
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <CastGallery>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : fallback
                }
                alt={name}
              />
              <h3>{name}</h3>
              <p>
                <span>Character:</span> {character}
              </p>
            </li>
          ))}
        </CastGallery>
      ) : (
        <Notice>Sorry, there is no information about this movie.</Notice>
      )}
    </>
  );
}
