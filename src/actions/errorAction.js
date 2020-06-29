import { ERROR_PARAM } from './types.js';

export function hanldeError(error) {
	return {
		type: ERROR_PARAM,
		error,
	};
}
