import React, { useContext } from 'react';

import { FaRegFilePdf, FaTelegramPlane, FaSun } from 'react-icons/fa';
import { IoIosLink } from 'react-icons/io';
import { GiEvilMoon } from 'react-icons/gi';
import './icons.scss';
import TooltipLabel from '../tooltips/TooltipLabel.js';
import { ThemeContext } from '../../context/Context.js';

export default function Icons({ collapse }) {
	const { theme, handleTheme } = useContext(ThemeContext);
	return (
		<>
			<TooltipLabel label='Donwload PDF' collapse={collapse}>
				<div className={`${theme}-content-icon`}>
					<FaRegFilePdf size={25} className='icon' />
				</div>
			</TooltipLabel>
			<TooltipLabel label='Send Email' collapse={collapse}>
				<div className={`${theme}-content-icon`}>
					<FaTelegramPlane size={25} className='icon' />
				</div>
			</TooltipLabel>
			<TooltipLabel label='Copy Link' collapse={collapse}>
				<div className={`${theme}-content-icon`}>
					<IoIosLink size={25} className='icon' />
				</div>
			</TooltipLabel>
			<TooltipLabel label='Theme' collapse={collapse}>
				<div className={`${theme}-content-icon`} onClick={handleTheme}>
					{theme === 'light' ? (
						<GiEvilMoon size={25} className='icon' />
					) : (
						<FaSun size={25} className='icon' />
					)}
				</div>
			</TooltipLabel>
		</>
	);
}
