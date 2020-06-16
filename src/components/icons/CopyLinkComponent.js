import React, { useContext } from 'react';
import { IoIosLink } from 'react-icons/io';
import TooltipLabel from '../tooltips/TooltipLabel';
import { ThemeContext } from '../../context/ThemeContext';
import useMenu from '../../hooks/useMenu';

export default function CopyLinkComponent({ collapse }) {
	const { theme } = useContext(ThemeContext);
	const { types, menuAction } = useMenu();
	return (
		<TooltipLabel label='Copy Link' collapse={collapse}>
			<div
				className={`${theme}-content-icon`}
				onClick={() => menuAction(types.copy)}
			>
				<IoIosLink size={25} className={`${theme}-icon`} />
			</div>
		</TooltipLabel>
	);
}
