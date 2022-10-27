import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from '../../services/movies.Api';
import { Notice, ReviewsList } from './Reviews.styled';

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
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>
                <span>Author:</span> {author}
              </h3>
              <p>{content}</p>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <Notice>We don't have any reviews for this movie.</Notice>
      )}
    </>
  );
}
