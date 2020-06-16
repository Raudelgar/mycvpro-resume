import React, { useContext } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import TooltipLabel from '../tooltips/TooltipLabel';
import { ThemeContext } from '../../context/ThemeContext';
import useMenu from '../../hooks/useMenu';

export default function MessagesComponent({ collapse }) {
	const { theme } = useContext(ThemeContext);
	const { types, menuAction } = useMenu();
	return (
		<TooltipLabel label='Send Email' collapse={collapse}>
			<div
				className={`${theme}-content-icon`}
				onClick={() => menuAction(types.msg)}
			>
				<FaTelegramPlane size={25} className={`${theme}-icon`} />
			</div>
		</TooltipLabel>
	);
}
