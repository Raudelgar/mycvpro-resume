import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './main.scss';
import NavBar from '../nav/NavBar.js';
import { ThemeContext } from '../../context/ThemeContext.js';
import LogoLoader from '../loaders/LogoLoader.js';
import Home from '../pages/home/Home.js';
import Footer from '../footer/Footer.js';
import useLoaderState from '../../hooks/useLoaderState.js';
import { handleInitData } from '../../actions/rootAction.js';
import useProfileState from '../../hooks/useProfileState';
import AlertComponent from '../alerts/AlertComponent.js';
import { AlertProvider } from '../../context/AlertContext';
import { EmailProvider } from '../../context/EmailContext';
import EmailComponent from '../pages/messages/EmailComponent';
import { isObjectEmpty } from '../../utils/helpers';
import PdfTemplate from '../view/pdf/PdfTemplate';

export default function App() {
	const { theme } = useContext(ThemeContext);
	const userProfile = useProfileState();
	const isLoading = useLoaderState();
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
				<LogoLoader />
				{!isObjectEmpty(userProfile) && (
					<EmailProvider>
						<div className={`${theme}-App`}>
							<AlertComponent />
							<EmailComponent />
							<NavBar />
							<Home />
							<Footer />
							<PdfTemplate />
						</div>
					</EmailProvider>
				)}
			</AlertProvider>
		</Router>
	);
}
