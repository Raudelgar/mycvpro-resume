import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './main.scss';
import NavBar from '../nav/NavBar.js';
import { ThemeContext } from '../../context/Context.js';
import useTheme from '../../hooks/useTheme.js';
import LogoLoader from '../loaders/LogoLoader.js';
import Home from '../pages/home/Home.js';
import Footer from '../footer/Footer.js';
import useLogoLoaderState from '../../hooks/useLogoLoaderState.js';
import { handleInitData } from '../../actions/rootAction.js';

export default function App() {
	//mock user id from url
	const id = '7i3ykuniv7su15p31ri2nn';
	const [theme, handleTheme] = useTheme();
	// const [isLoading, setLoading] = useState(true);
	const isLoading = useLogoLoaderState();
	const dispatch = useDispatch();

	useEffect(() => {
		const delay = window.setTimeout(() => {
			dispatch(handleInitData(id));
			// setLoading(false);
		}, 500);

		return (_) => window.clearTimeout(delay);
	}, []);

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
