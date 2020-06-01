import { useContext } from 'react';
import useCopyToClip from './useCopyToClip.js';
import { EmailContext } from '../context/EmailContext.js';

export default function useMenu() {
	const { copyToClipBoard } = useCopyToClip();
	const { openEmailForm } = useContext(EmailContext);

	const types = {
		copy: 'COPY_LINK',
		pdf: 'PDF',
		msg: 'MSG',
	};
	const menuAction = (type) => {
		switch (type) {
			case 'COPY_LINK':
				return copyToClipBoard();
			case 'PDF':
				console.log('download pdf');
				break;
			case 'MSG':
				return openEmailForm();
			default:
				break;
		}
	};

	return { types, menuAction };
}
