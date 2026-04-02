import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
	return (
		<nav className={classes.nav}>
			<ul className={classes.navList}>
				<li>
					<NavLink className={classes.navLink} to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink className={classes.navLink} to='/movies'>
						Movies
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
