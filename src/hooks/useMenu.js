import { useContext } from 'react';
import useCopyToClip from './useCopyToClip.js';
import { EmailContext } from '../context/EmailContext.js';
import usePdfDownload from './usePdfDownload.js';

export default function useMenu() {
	const { copyToClipBoard } = useCopyToClip();
	const { openEmailForm } = useContext(EmailContext);
	const { downLoadPdf } = usePdfDownload();

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
				return downLoadPdf();
			case 'MSG':
				return openEmailForm();
			default:
				break;
		}
	};

	return { types, menuAction };
}
