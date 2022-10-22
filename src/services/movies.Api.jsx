import axios from 'axios';

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300/';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c17bf6e924f8c464ad14541e0a1a8fcf';

export const getTrendingMovie = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const getSearchMovie = async (query, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};

export const getDetailsMovie = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getReviewsMovie = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
