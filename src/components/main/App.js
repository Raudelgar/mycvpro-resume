import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './main.scss';
import NavBar from '../nav/NavBar.js';
import { ThemeContext } from '../../context/ThemeContext.js';
import LogoLoader from '../loaders/LogoLoader.js';
import Home from '../pages/home/Home.js';
import Footer from '../footer/Footer.js';
import useLogoLoaderState from '../../hooks/useLogoLoaderState.js';
import { handleInitData } from '../../actions/rootAction.js';
import useProfileState from '../../hooks/useProfileState';
import SuccessMsg from '../alerts/SuccessMsg.js';
import { AlertProvider } from '../../context/AlertContext';
import EmailForm from '../pages/messages/EmailForm';
import { EmailProvider } from '../../context/EmailContext';

export default function App() {
	const { theme } = useContext(ThemeContext);
	const isLoading = useLogoLoaderState();
	const userProfile = useProfileState();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleInitData());
	}, [dispatch]);

	useEffect(() => {
		// console.log('App effect', userProfile);
	}, [userProfile]);

	return (
		<Router>
			<AlertProvider>
				{isLoading ? (
					<LogoLoader />
				) : (
					<EmailProvider>
						<div className={`${theme}-App`}>
							<SuccessMsg msg={'Copied To Clipboard!'} />
							<EmailForm />
							<NavBar />
							<Home />
							<Footer />
						</div>
					</EmailProvider>
				)}
			</AlertProvider>
		</Router>
	);
}
