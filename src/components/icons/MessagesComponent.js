import React, { useContext } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import TooltipLabel from 'components/tooltips/TooltipLabel';
import { ThemeContext } from 'context/ThemeContext';
import { EmailContext } from 'context/EmailContext';
import './icons.scss';

export default function MessagesComponent({ collapse = true }) {
	const { theme } = useContext(ThemeContext);
	const { openEmailForm } = useContext(EmailContext);

	const handleEmailForm = () => {
		openEmailForm();
	};

	return (
		<TooltipLabel label='Send Email' collapse={collapse}>
			<div className={`${theme}-content-icon`} onClick={handleEmailForm}>
				<FaTelegramPlane size={25} className={`${theme}-icon`} />
			</div>
		</TooltipLabel>
	);
}
