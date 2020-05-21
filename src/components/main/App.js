import React, { useEffect } from 'react';
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
import useProfileState from '../../hooks/useProfileState';

export default function App() {
	//mock user id from url
	const id = '7i3ykuniv7su15p31ri2nn';
	const [theme, handleTheme] = useTheme();
	const isLoading = useLogoLoaderState();
	const userProfile = useProfileState();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleInitData(id));
	}, [dispatch]);

	useEffect(() => {
		// console.log('App effect', userProfile);
	}, [userProfile]);

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
