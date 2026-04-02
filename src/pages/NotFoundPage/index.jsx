import { Link } from 'react-router-dom';
import classes from './NotFoundPage.module.css';

const NotFoundPage = () => {
	return (
		<div className='container'>
			<div className={classes.notFoundWrapper}>
				<h1>404 - Not Found</h1>
				<Link to='/'>Home</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
