import React, { createContext, useState, useEffect } from 'react';

export const AlertContext = createContext();

export const AlertProvider = (props) => {
	const [show, setShow] = useState({ bool: false, component: null });

	useEffect(() => {
		//remove alert element after 2.5s
		let timerID = 0;
		if (show.bool) {
			timerID = window.setTimeout(() => hideAlert(), 2500);
		}
		return () => window.clearTimeout(timerID);
	}, [show]);

	const showAlert = (component) => setShow({ bool: true, component });
	const hideAlert = () => setShow({ bool: false, component: null });
	// console.log('test alert');
	return (
		<AlertContext.Provider value={{ show, showAlert, hideAlert }}>
			{props.children}
		</AlertContext.Provider>
	);
};
