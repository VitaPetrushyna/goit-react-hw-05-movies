// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getCreditsMovie } from '../../services/movies.Api';
// import toast from 'react-hot-toast';

// export function Cast() {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function searchCreditsMovies() {
//       try {
//         const fetchCreditsMovies = await getCreditsMovie(movieId);
//         setCast(fetchCreditsMovies);

//         if (!fetchCreditsMovies) {
//           toast.error('Sorry, there is no information about this film');
//         }
//       } catch (error) {
//         setError(error);
//       } finally {
//       }
//     }
//     searchCreditsMovies(movieId);
//   }, [movieId]);

//   return <></>;
// }
