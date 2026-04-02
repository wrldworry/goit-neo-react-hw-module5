import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import classes from './GoBack.module.css';

const GoBack = () => {
	const location = useLocation();
	const backLink = useRef(location.state ?? '/movies');

	return (
		<Link className={classes.backButton} to={backLink.current}>
			Go back
		</Link>
	);
};

export default GoBack;
