import { NavLink, useParams, Outlet } from 'react-router-dom';
import { getMovieById } from '../../api/themoviedb';
import { useEffect, useState } from 'react';
import GoBack from '../../components/GoBack';
import classes from './MovieDetailsPage.module.css';
import noThumbnail from '../../assets/no-thumbnail.png';

const MovieDetailsPage = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		getMovieById(movieId).then(movie => setMovie(movie));
	}, [movieId]);

	return (
		<div className='container'>
			<div className={classes.movieDetailsWrapper}>
				<GoBack />
				{movie && (
					<div className={classes.movieCard}>
						<div className={classes.movieCardImgWrapper}>
							<img
								src={
									movie.poster_path
										? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
										: noThumbnail
								}
								alt={movie.title}
								width={400}
							/>
						</div>
						<div className={classes.movieAttributes}>
							<h2>{movie.title}</h2>
							<p>User score: {movie.vote_average}</p>
							<h3>Overview</h3>
							<p className={classes.movieOverview}>{movie.overview}</p>
							<h3>Genres</h3>
							<ul className={classes.movieGenres}>
								{movie.genres.map(({ id, name }) => (
									<li className={classes.movieGenre} key={id}>
										{name}
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
				<h3>Additional information</h3>
				<div className={classes.movieGenres}>
					<NavLink className={classes.movieLink} to={`/movies/${movieId}/cast`}>
						Cast
					</NavLink>
					<NavLink
						className={classes.movieLink}
						to={`/movies/${movieId}/reviews`}
					>
						Reviews
					</NavLink>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default MovieDetailsPage;
