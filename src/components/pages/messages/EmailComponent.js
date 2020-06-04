import React, { useContext, useState, useEffect } from 'react';

import './form.scss';
import { EmailContext } from '../../../context/EmailContext';
import EmailForm from './EmailForm';

export default function EmailComponent() {
	const { isOpen, miniBottom, miniScreen, miniEmailScreen } = useContext(
		EmailContext
	);

	return (
		<>
			{isOpen && (
				<>
					{miniScreen ? (
						<EmailForm />
					) : (
						<div className='form-container' onClick={miniEmailScreen}>
							<EmailForm />
						</div>
					)}
				</>
			)}
		</>
	);
}
