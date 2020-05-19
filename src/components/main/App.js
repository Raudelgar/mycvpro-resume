import React, { useState, useEffect } from 'react';

import './main.scss';
import NavBar from '../nav/NavBar.js';
import { ThemeContext } from '../../context/Context.js';
import useTheme from '../../hooks/useTheme.js';
import LogoLoader from '../loaders/LogoLoader.js';
import Home from '../pages/home/Home.js';
import Footer from '../footer/Footer.js';

export default function App() {
	const [theme, handleTheme] = useTheme();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const delay = window.setTimeout(() => {
			setLoading(false);
		}, 500);

		return (_) => window.clearTimeout(delay);
	}, [isLoading]);

	return (
		<ThemeContext.Provider value={{ theme, handleTheme }}>
			{isLoading ? (
				<LogoLoader />
			) : (
				<div className={`${theme}-App`}>
					<NavBar />
					<Home />
					<Footer />
				</div>
			)}
		</ThemeContext.Provider>
	);
}
