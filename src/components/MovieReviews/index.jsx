import { useParams } from 'react-router-dom';
import classes from './MovieReviews.module.css';
import { getMovieReviews } from '../../api/themoviedb';
import { useEffect, useState } from 'react';

const MovieReviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState(null);

	useEffect(() => {
		getMovieReviews(movieId).then(reviews => setReviews(reviews));
	}, [movieId]);
	return (
		<ul className={classes.reviewsList}>
			{reviews && reviews.length > 0 ? (
				reviews.map(({ id, author, content }) => (
					<li key={id} className={classes.reviewItem}>
						<h3 className={classes.reviewTitle}>{author}</h3>
						<p className={classes.reviewText}>{content}</p>
					</li>
				))
			) : (
				<li className={classes.reviewItem}>
					<p>{"We don't have any reviews for this movie."}</p>
				</li>
			)}
		</ul>
	);
};

export default MovieReviews;
