import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';

import './alerts.scss';
import { AlertContext } from '../../context/AlertContext';

export default function SuccessMsg({ msg }) {
	const { show, hideAlert } = useContext(AlertContext);

	return (
		<>
			{show && (
				<div className='alert-container'>
					<div className='success'>{msg}</div>
					<div className='close-alert' onClick={hideAlert}>
						<IoMdClose className='close-icon' />
					</div>
				</div>
			)}
		</>
	);
}
