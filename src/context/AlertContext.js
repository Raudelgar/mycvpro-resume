import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertProvider = (props) => {
	const [show, setShow] = useState(false);

	const showAlert = () => setShow(true);
	const hideAlert = () => setShow(false);

	return (
		<AlertContext.Provider value={{ show, showAlert, hideAlert }}>
			{props.children}
		</AlertContext.Provider>
	);
};
