import { INIT_EXPE } from 'redux/types.js';

export function getExperience(experience) {
	return {
		type: INIT_EXPE,
		payload: experience,
	};
}
