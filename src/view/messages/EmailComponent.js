import React, { useContext } from 'react';

import './form.scss';
import { EmailContext } from 'context/EmailContext';
import EmailForm from './EmailForm';

export default function EmailComponent() {
	const { isOpen, miniBottom, miniScreen } = useContext(EmailContext);

	return (
		<>
			{isOpen && (
				<>
					{miniScreen ? (
						<EmailForm />
					) : (
						<div
							className={`form-container ${
								miniBottom ? 'form-container-hide' : ''
							}`}
						>
							<EmailForm />
						</div>
					)}
				</>
			)}
		</>
	);
}
