import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from 'context/ThemeContext';
import { AlertProvider } from 'context/AlertContext';
import store from 'redux/store.js';
import { Provider } from 'react-redux';

afterEach(cleanup);

describe('App Component', () => {
	it('App should render without crash', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<ThemeProvider>
					<AlertProvider>
						<App />
					</AlertProvider>
				</ThemeProvider>
			</Provider>
		);

		expect(getByTestId('cvapp')).toBeInTheDocument();
	});
});
