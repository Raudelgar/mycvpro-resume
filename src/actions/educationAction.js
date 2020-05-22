import { INIT_EDU } from './types.js';

export function getEducation(education) {
	return {
		type: INIT_EDU,
		payload: education,
	};
}
