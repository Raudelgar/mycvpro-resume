import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import queryString from 'query-string';

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
	const [theme, handleTheme] = useTheme();
	const isLoading = useLogoLoaderState();
	const userProfile = useProfileState();
	const dispatch = useDispatch();

	useEffect(() => {
		const { cvid, usr, share } = queryString.parse(window.location.search);
		if (usr) console.log(usr);
		if (share) console.log(share);
		dispatch(handleInitData(cvid));
	}, [dispatch]);

	useEffect(() => {
		// console.log('App effect', userProfile);
	}, [userProfile]);

	return (
		<Router>
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
		</Router>
	);
}
