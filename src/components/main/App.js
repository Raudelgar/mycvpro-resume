import React, { useState, useEffect } from 'react';

import './main.scss';
import NavBar from '../nav/NavBar.js';
import ThemeContext from '../../context/ThemeContext.js';
import useTheme from '../../hooks/useTheme.js';
import SemipolarSpinner from '../loaders/SemipolarSpinner.js';

export default function App() {
	const [theme, handleTheme] = useTheme();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const delay = window.setTimeout(() => {
			setLoading(false);
		}, 3000);

		return (_) => window.clearTimeout(delay);
	}, [isLoading]);

	return (
		<ThemeContext.Provider value={{ theme, handleTheme }}>
			{isLoading ? (
				<SemipolarSpinner />
			) : (
				<div className={`${theme}-App`}>
					<NavBar />
				</div>
			)}
		</ThemeContext.Provider>
	);
}
