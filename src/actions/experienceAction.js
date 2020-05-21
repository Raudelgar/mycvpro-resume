import { INIT_EXPE } from './types.js';

export function getExperience(experience) {
	return {
		type: INIT_EXPE,
		payload: experience,
	};
}
