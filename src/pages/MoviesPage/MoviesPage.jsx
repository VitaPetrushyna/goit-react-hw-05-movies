// import { useState, useEffect } from 'react';
// import { getSearchMovie } from '../../services/movies.Api';
// import { MovieGallery } from '../../components/MovieGallery/MovieGallery';
// import { Status } from '../../utils/Status';
// import { Loader } from '../../components/Loader/Loader';
// import {SearchBar} from '../../components/SearchBar/SearchBar'

// export const Home = () => {
//   // const [page, setPage] = useState(1);
//   // const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [status, setStatus] = useState(Status.IDLE);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function searchMovies() {
//       try {
//         const fetchMovies = await getTrendingMovie();

//         setMovies(fetchMovies.results);
//         setStatus(Status.RESOLVED);
//       } catch (error) {
//         setError(error);
//         setStatus(Status.REJECTED);
//       } finally {
//       }
//     }
//     searchMovies();
//   }, []);

//   return (
//     <>
//       {status === Status.IDLE && <></>}
//       {status === Status.PENDING && <Loader />}
//       {status === Status.REJECTED && (
//         <div style={{ color: 'red' }}>{error}</div>
//       )}
//       {status === Status.RESOLVED && movies && (
//         <MovieGallery
//           movies={movies}
//           title={'Trending today:'}
//           locationState={location}
//         />
//       )}
//     </>
//   );
// };

// export function App() {
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState('');
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [modalImgUrl, setModalImgUrl] = useState('');
//   const [modalImgAlt, setModalImgAlt] = useState('');
//   const [totalHits, setTotalHits] = useState(0);
//   const [status, setStatus] = useState(Status.IDLE);

//   useEffect(() => {
//     // setStatus(Status.IDLE);
//     if (query === '') {
//       return;
//     }
//     async function searchImages() {
//       try {
//         const fetchImages = await getImages(query, page);

//         setImages(prevState => [...prevState, ...fetchImages.hits]);
//         setTotalHits(fetchImages.totalHits);
//         // setStatus(Status.RESOLVED);

//         if (fetchImages.hits.length === 0) {
//           toast.error(
//             'Sorry, there are no images matching your search query. Please try again.'
//           );
//         }
//       } catch (error) {
//         setError(error);
//         setStatus(Status.REJECTED);
//       } finally {
//         setLoading(false);
//       }
//     }
//     searchImages();
//   }, [query, page]);

//   const handleSearchFormSubmit = findQuery => {
//     if (findQuery !== query) {
//       setPage(1);
//       setQuery(findQuery);
//       setImages([]);
//     } else {
//       toast('What to show you?', {
//         icon: '👏',
//       });
//     }
//   };

//   const loadMore = () => {
//     setPage(prevState => page + 1);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleImgClick = ({ largeImageURL: url, tags: alt }) => {
//     setModalImgUrl(url);
//     setModalImgAlt(alt);
//     toggleModal();
//   };

//   const totalPages = Math.ceil(totalHits / 12);

//   return (
//     <div className={styles.app}>
//       <Searchbar onSubmit={handleSearchFormSubmit} />
//       {status === 'idle' && <></>}
//       {status === 'pending' && <Loader />}
//       {status === 'rejected' && <div style={{ color: 'red' }}>{error}</div>}
//       {loading && <Loader />}
//       {showModal && (
//         <Modal url={modalImgUrl} alt={modalImgAlt} onClose={toggleModal} />
//       )}
//       <ImageGallery images={images} openModal={handleImgClick} />
//       {images.length !== 0 && totalPages !== page && (
//         <Button btnLoadMore={loadMore} />
//       )}
//       <Toaster position="top-left" />
//     </div>
//   );
// }
