import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './main.scss';
import NavBar from '../nav/NavBar.js';
import { ThemeContext } from '../../context/ThemeContext.js';
import LogoLoader from '../loaders/LogoLoader.js';
import Home from '../pages/home/Home.js';
import Footer from '../footer/Footer.js';
import { handleInitData } from '../../actions/rootAction.js';
import useProfileState from '../../hooks/useProfileState';
import AlertComponent from '../alerts/AlertComponent.js';
import { AlertContext } from '../../context/AlertContext';
import { EmailProvider } from '../../context/EmailContext';
import EmailComponent from '../pages/messages/EmailComponent';
import { isObjectEmpty } from '../../utils/helpers';
import useErrorState from '../../hooks/useErrorState.js';
import ErrorMsg from '../alerts/ErrorMesg';
import { Animated } from 'react-animated-css';

export default function App() {
	const { theme } = useContext(ThemeContext);
	const { showAlert } = useContext(AlertContext);
	const userProfile = useProfileState();
	const error = useErrorState();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleInitData());
	}, [dispatch]);

	useEffect(() => {
		if (error.bool) {
			showAlert(
				<ErrorMsg
					msg={error.error}
					styles={{
						container: 'error-alert-container',
						success: 'error',
						msg: 'error-alert-msg',
					}}
				/>,
				true
			);
		}
	}, [error, showAlert]);

	return (
		<Router>
			<LogoLoader />
			{!isObjectEmpty(userProfile) && (
				<Animated animationIn='fadeIn' animationInDelay={900}>
					<EmailProvider>
						<div className={`${theme}-App`}>
							<AlertComponent />
							<EmailComponent />
							<NavBar />
							<Home />
							<Footer />
						</div>
					</EmailProvider>
				</Animated>
			)}
			<Animated animationIn='fadeIn' animationInDelay={900}>
				<AlertComponent />
			</Animated>
		</Router>
	);
}
