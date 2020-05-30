import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/main/App';
import store from './store.js';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
