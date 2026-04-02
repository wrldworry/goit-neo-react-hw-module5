import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../api/themoviedb';
import MovieList from '../../components/MovieList';

const HomePage = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getPopularMovies().then(movies => setMovies(movies));
	}, []);

	return (
		<div className='container'>
			<h1 style={{ margin: '1rem auto' }}>Tranding Today</h1>
			<MovieList movies={movies} />
		</div>
	);
};

export default HomePage;
