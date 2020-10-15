import React, { createContext, useState } from 'react';

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
