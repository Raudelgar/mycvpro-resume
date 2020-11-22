import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IoIosLink } from 'react-icons/io';
import TooltipLabel from 'components/tooltips/TooltipLabel';
import { ThemeContext } from 'context/ThemeContext';
import useCopyToClip from 'hooks/useCopyToClip';
import './icons.scss';

export default function CopyLinkComponent({ collapse = true }) {
	const { theme } = useContext(ThemeContext);
	const { copyToClipBoard } = useCopyToClip();

	const handleCopyLink = () => {
		copyToClipBoard();
	};

	return (
		<TooltipLabel label='Copy Link' collapse={collapse}>
			<div
				data-testid='cp-link'
				className={`${theme}-content-icon`}
				onClick={handleCopyLink}
			>
				<IoIosLink size={25} className={`${theme}-icon`} />
			</div>
		</TooltipLabel>
	);
}

CopyLinkComponent.propTypes = {
	collapse: PropTypes.bool,
};
