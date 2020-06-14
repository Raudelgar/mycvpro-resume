import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertProvider = (props) => {
	const [show, setShow] = useState({ bool: false, component: null });

	const showAlert = (component) => setShow({ bool: true, component });
	const hideAlert = () => setShow({ bool: false, component: null });

	return (
		<AlertContext.Provider value={{ show, showAlert, hideAlert }}>
			{props.children}
		</AlertContext.Provider>
	);
};
