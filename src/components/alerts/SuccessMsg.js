import React, { useContext, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

import './alerts.scss';
import { AlertContext } from '../../context/AlertContext';

export default function SuccessMsg({ msg }) {
	const { show, hideAlert } = useContext(AlertContext);

	useEffect(() => {
		//remove alert element after 6s
		const timerID = window.setTimeout(() => hideAlert(), 4500);
		return () => window.clearTimeout(timerID);
	}, [show]);

	return (
		<>
			{show && (
				<div className='alert-container'>
					<div className='success'>
						<span className='alert-msg'>{msg}</span>
						<div className='close-alert' onClick={hideAlert}>
							<IoMdClose className='close-icon' />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
