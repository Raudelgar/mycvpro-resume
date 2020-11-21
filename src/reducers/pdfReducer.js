import { GET_PDF, PDF_DONE } from 'actions/types.js';

export default function pdfReducer(state = false, { type, isDisable }) {
	switch (type) {
		case GET_PDF:
			return isDisable;
		case PDF_DONE:
			return isDisable;
		default:
			return state;
	}
}
