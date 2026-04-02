import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common.Authorization = `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`;

const fetchData = async endpoint => {
	try {
		const response = await axios.get(endpoint);
		return response.data;
	} catch (error) {
		console.error(`Error fetching data from ${endpoint}:`, error);
		return null;
	}
};

export const getPopularMovies = async () => {
	const data = await fetchData('/trending/movie/day');
	return data ? data.results : [];
};

export const getMovieBySearch = async query => {
	const data = await fetchData(`/search/movie?query=${query}`);
	return data ? data.results : [];
};

export const getMovieById = async movieId => {
	return await fetchData(`/movie/${movieId}`);
};

export const getMovieCast = async movieId => {
	const data = await fetchData(`/movie/${movieId}/credits`);
	return data ? data.cast : [];
};

export const getMovieReviews = async movieId => {
	const data = await fetchData(`/movie/${movieId}/reviews`);
	return data ? data.results : [];
};
