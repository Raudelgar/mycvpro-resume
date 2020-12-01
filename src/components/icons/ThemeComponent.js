import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaSun } from 'react-icons/fa';
import { MdBrightness4 } from 'react-icons/md';
import TooltipLabel from 'components/tooltips/TooltipLabel';
import { ThemeContext } from 'context/ThemeContext';
import './icons.scss';

export default function ThemeComponent({ collapse = true }) {
	const { theme, handleTheme } = useContext(ThemeContext);
	return (
		<TooltipLabel label='Theme' collapse={collapse}>
			<div
				data-testid='btn-theme'
				className={`${theme}-content-icon`}
				onClick={handleTheme}
			>
				{theme === 'light' ? (
					<MdBrightness4 size={25} className={`${theme}-icon`} />
				) : (
					<FaSun size={25} className={`${theme}-icon`} />
				)}
			</div>
		</TooltipLabel>
	);
}

ThemeComponent.propTypes = {
	collapse: PropTypes.bool,
};
