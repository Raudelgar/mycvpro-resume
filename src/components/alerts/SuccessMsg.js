import React, { useContext, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

import './alerts.scss';
import { AlertContext } from '../../context/AlertContext';
import CloseBtn from '../view/buttons/CloseBtn';

export default function SuccessMsg({ msg }) {
	const { show, hideAlert } = useContext(AlertContext);

	useEffect(() => {
		//remove alert element after 2.5s
		const timerID = window.setTimeout(() => hideAlert(), 2500);
		return () => window.clearTimeout(timerID);
	}, [show]);

	return (
		<>
			{show && (
				<div className='alert-container'>
					<div className='success'>
						<span className='alert-msg'>{msg}</span>
						<CloseBtn
							event={hideAlert}
							styles={{ container: 'close-alert', icon: 'close-icon' }}
						/>
					</div>
				</div>
			)}
		</>
	);
}
