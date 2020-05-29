import useCopyToClip from './useCopyToClip.js';

export default function useMenu() {
	const copyToClipBoard = useCopyToClip();

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
				console.log('send messages');
				break;
		}
	};

	return { types, menuAction };
}
