import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
	const [theme, setTheme] = useState('dark');

	const handleTheme = () =>
		setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));

	return (
		<ThemeContext.Provider value={{ theme, handleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
