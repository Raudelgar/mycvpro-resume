import React, { useContext } from 'react';
import { IoIosLink } from 'react-icons/io';
import TooltipLabel from 'components/tooltips/TooltipLabel';
import { ThemeContext } from 'context/ThemeContext';
import useCopyToClip from 'hooks/useCopyToClip';

export default function CopyLinkComponent({ collapse }) {
	const { theme } = useContext(ThemeContext);
	const { copyToClipBoard } = useCopyToClip();

	const handleCopyLink = () => {
		copyToClipBoard();
	};

	return (
		<TooltipLabel label='Copy Link' collapse={collapse}>
			<div className={`${theme}-content-icon`} onClick={handleCopyLink}>
				<IoIosLink size={25} className={`${theme}-icon`} />
			</div>
		</TooltipLabel>
	);
}
