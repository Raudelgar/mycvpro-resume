import React, { useContext, useEffect } from 'react';
import { AlertContext } from '../../context/AlertContext';

export default function AlertComponent() {
	const { show, hideAlert } = useContext(AlertContext);

	useEffect(() => {
		//remove alert element after 2.5s
		const timerID = window.setTimeout(() => hideAlert(), 2500);
		return () => window.clearTimeout(timerID);
	}, [show, hideAlert]);

	return <>{show.bool && show.component}</>;
}
