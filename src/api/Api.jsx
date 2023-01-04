const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "6f3a72a470b06bab99f8d69f54b4e2d3";


async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
};

export function getTrending() {
  return fetchMovies(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
};

export function getMoviesSearch(query) {
  return fetchMovies(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  )
};

export function getMovieId(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  )
};

export function getCast(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  )
};

export function getReviews(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  )
};