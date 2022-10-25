import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from '../../services/movies.Api';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function searchReviewsMovies() {
      try {
        const fetchReviewsMovies = await getReviewsMovie(movieId);
        setReviews(fetchReviewsMovies.results);

        if (fetchReviewsMovies.results.length === 0) {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
    searchReviewsMovies(movieId);
  }, [movieId]);

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}
