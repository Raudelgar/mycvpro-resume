import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from 'view/nav/NavBar.js';
import { ThemeContext } from 'context/ThemeContext.js';
import LogoLoader from 'components/loaders/LogoLoader.js';
import Home from 'pages/home/Home.js';
import Footer from 'view/footer/Footer.js';
import { handleInitData } from 'redux/actions/rootAction.js';
import AlertComponent from 'components/alerts/AlertComponent.js';
import { AlertContext } from 'context/AlertContext';
import { EmailProvider } from 'context/EmailContext';
import EmailComponent from 'view/messages/EmailComponent';
import { isObjectEmpty } from 'utils/helpers';
import ErrorMsg from 'components/alerts/ErrorMesg';
import './main.scss';

export default function App() {
	const { theme } = useContext(ThemeContext);
	const { showAlert } = useContext(AlertContext);
	const userProfile = useSelector((store) => store.profile);
	const error = useSelector((store) => store.error);
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
		<div data-testid='cvapp'>
			<Router>
				<LogoLoader />
				{!isObjectEmpty(userProfile) && (
					<EmailProvider>
						<div className={`${theme}-App`}>
							<AlertComponent />
							<EmailComponent />
							<NavBar />
							<Home />
							<Footer />
						</div>
					</EmailProvider>
				)}
				<AlertComponent />
			</Router>
		</div>
	);
}
