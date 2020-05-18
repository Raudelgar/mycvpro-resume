import React, { useContext } from 'react';

import './nav.scss';
import Menu from './Menu.js';
import ThemeContext from '../../context/ThemeContext.js';

export default function NavBar() {
	const { theme } = useContext(ThemeContext);
	return (
		<nav className={`${theme}-nav`}>
			<div className='main-header'>
				<div className='logo'>LOGO</div>
				<div className='user-name'>USER_NAME</div>
				<Menu />
			</div>
		</nav>
	);
}
