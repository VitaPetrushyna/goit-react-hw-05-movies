import axios from 'axios';

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c17bf6e924f8c464ad14541e0a1a8fcf';

export const getTrendingMovie = async page => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};

export const getSearchMovie = async (query, page = 1) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};

export const getDetailsMovie = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getReviewsMovie = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
