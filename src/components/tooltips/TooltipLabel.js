import React from 'react';

import './tooltip.scss';
import useHover from '../../hooks/useHover.js';

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
