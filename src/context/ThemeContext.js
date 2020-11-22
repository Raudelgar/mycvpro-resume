import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
	const [theme, setTheme] = useState('');

	const handleTheme = () => {
		setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
	};

	useEffect(() => {
		const usrTheme = window.localStorage.getItem('cvcode_usr_th');
		if (!usrTheme) {
			window.localStorage.setItem('cvcode_usr_th', 'dark');
			setTheme('dark');
		} else {
			setTheme(usrTheme);
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem('cvcode_usr_th', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, handleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
