import { useEffect, useState } from 'react';
import { getMovieBySearch } from '../../api/themoviedb';
import MovieList from '../../components/MovieList';
import SearchForm from '../../components/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const MoviesPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const query = searchParams.get('query');

		if (!query) return;

		setLoading(true);

		getMovieBySearch(query)
			.then(data => {
				setMovies(data);
			})
			.catch(error => {
				console.error(error);
				setMovies([]);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [searchParams]);

	const handleSubmit = value => {
		setSearchParams({ query: value });
	};

	return (
		<>
			<SearchForm onSubmit={handleSubmit} />
			<div className='container'>
				{loading ? (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '100vh',
						}}
					>
						<BeatLoader
							color='#4f46e5'
							loading={loading}
							size={12}
							aria-label='Loading Spinner'
						/>
					</div>
				) : movies.length === 0 && searchParams.get('query') ? (
					<p style={{ margin: '2rem auto' }}>Нічого не знайдено 😢</p>
				) : (
					<MovieList movies={movies} />
				)}
			</div>
		</>
	);
};

export default MoviesPage;
