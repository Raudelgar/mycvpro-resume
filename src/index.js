import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from 'App';
import store from 'redux/store.js';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'context/ThemeContext';
import { AlertProvider } from 'context/AlertContext';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<AlertProvider>
					<App />
				</AlertProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
