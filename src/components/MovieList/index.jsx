import { Link, useLocation } from 'react-router-dom';
import classes from './MovieList.module.css';
import noThumbnail from '../../assets/no-thumbnail.png';

const MovieList = ({ movies }) => {
	const location = useLocation();

	return (
		<ul className={classes.movieList}>
			{movies.map(({ id, poster_path, title }) => (
				<li key={id}>
					<Link
						className={classes.movieLink}
						to={`/movies/${id}`}
						state={location}
					>
						<div className={classes.imgWrapper}>
							<img
								className={`${classes.movieImg} ${!poster_path ? classes.noThumbnail : ''}`}
								src={
									poster_path
										? `https://image.tmdb.org/t/p/w500${poster_path}`
										: noThumbnail
								}
								alt={title}
							/>
						</div>
						<div className={classes.movieOverlay}>
							<h3 className={classes.movieTitle}>{title}</h3>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default MovieList;
