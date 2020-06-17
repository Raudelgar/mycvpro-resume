import { GET_PDF, PDF_DONE } from './types.js';
import { showLoader, hideLoader } from './loaderAction.js';
import { requestPdf } from '../api/v1/api.js';

export function getPdf(profile) {
	return (dispatch) => {
		dispatch(showLoader('pdf-btn'));
		//Disable PDF Btn
		dispatch(disbalePdfBtn());
		//Request PDF from API
		requestPdf(profile.id)
			.then((res) => res)
			.catch((error) => console.log(error))
			.then(() => {
				dispatch(enablePdfBtn());
				dispatch(hideLoader());
			});
		// setTimeout(() => {
		// 	//Once PDF is done,
		// 	dispatch(enablePdfBtn());
		// 	dispatch(hideLoader());
		// }, 3000);
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
