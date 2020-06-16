import React, { useContext } from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import TooltipLabel from '../tooltips/TooltipLabel';
import { ThemeContext } from '../../context/ThemeContext';
import useMenu from '../../hooks/useMenu';

export default function PdfComponent({ collapse }) {
	const { theme } = useContext(ThemeContext);
	const { types, menuAction } = useMenu();
	return (
		<TooltipLabel label='Donwload PDF' collapse={collapse}>
			<div
				className={`${theme}-content-icon`}
				onClick={() => menuAction(types.pdf)}
			>
				<FaRegFilePdf size={25} className={`${theme}-icon`} />
			</div>
		</TooltipLabel>
	);
}
