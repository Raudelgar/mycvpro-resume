import { GET_PDF, PDF_DONE } from './types.js';
import { showLoader, hideLoader } from './loaderAction.js';

export function getPdf() {
	console.log('download pdf');
	return (dispatch) => {
		dispatch(showLoader('pdf-btn'));
		//Disable PDF Btn
		dispatch(disbalePdfBtn());
		//Request PDF from API
		setTimeout(() => {
			//Once PDF is done,
			dispatch(enablePdfBtn());
			dispatch(hideLoader());
		}, 3000);
	};
}

function disbalePdfBtn() {
	return {
		type: GET_PDF,
		isDisable: true,
	};
}

function enablePdfBtn() {
	return {
		type: PDF_DONE,
		isDisable: false,
	};
}
