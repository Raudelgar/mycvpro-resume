import React from 'react';
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'context/ThemeContext';
import { AlertProvider } from 'context/AlertContext';
import { EmailProvider } from 'context/EmailContext';
import store from 'redux/store.js';
import { Provider } from 'react-redux';

export const renderWithContext = (component) => (
	<Provider store={store}>
		<ThemeProvider>
			<AlertProvider>
				<EmailProvider>{component}</EmailProvider>
			</AlertProvider>
		</ThemeProvider>
	</Provider>
);
