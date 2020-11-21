import { ERROR_PARAM } from 'redux/types.js';

export default function errorReducer(
	state = { bool: false, msg: '' },
	{ type, error }
) {
	switch (type) {
		case ERROR_PARAM:
			return {
				bool: true,
				error,
			};
		default:
			return state;
	}
}
