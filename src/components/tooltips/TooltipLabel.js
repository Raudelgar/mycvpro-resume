import React from 'react';
import PropTypes from 'prop-types';
import useHover from 'hooks/useHover.js';
import './tooltip.scss';

export default function TooltipLabel({
	label = 'Tooltip',
	collapse,
	children,
}) {
	const [isHover, attr] = useHover();

	return (
		<div className='tooltip-label-content' {...attr}>
			{isHover && (
				<div
					className={`tooltip-label ${
						collapse ? 'tooltip-label-collapse' : ''
					}`}
				>
					{label}
				</div>
			)}
			{children}
		</div>
	);
}
TooltipLabel.propTypes = {
	label: PropTypes.string,
	collapse: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
};
