import React, { useContext } from 'react';
import { AlertContext } from 'context/AlertContext';

export default function AlertComponent() {
	const { show } = useContext(AlertContext);

	return <>{show.bool && show.component}</>;
}
