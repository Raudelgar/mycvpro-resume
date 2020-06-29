import React, { createContext, useState, useEffect } from 'react';

export const AlertContext = createContext();

export const AlertProvider = (props) => {
	const [show, setShow] = useState({
		bool: false,
		component: null,
		error: false,
	});

	useEffect(() => {
		//remove alert element after 2.5s
		let timerID = 0;
		if (show.bool && !show.error) {
			timerID = window.setTimeout(() => hideAlert(), 2500);
		}
		return () => window.clearTimeout(timerID);
	}, [show]);

	const showAlert = (component, error = false) =>
		setShow({ bool: true, component, error });
	const hideAlert = () => {
		setShow({ bool: false, component: null, error: false });
	};
	// console.log('test alert');
	return (
		<AlertContext.Provider value={{ show, showAlert, hideAlert }}>
			{props.children}
		</AlertContext.Provider>
	);
};
