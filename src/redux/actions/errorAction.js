import { ERROR_PARAM } from 'redux/types.js';

export function hanldeError(error) {
	return {
		type: ERROR_PARAM,
		error,
	};
}
