import { INIT_DATA } from './types.js';

export function getSkills(skills) {
	return {
		type: INIT_DATA,
		payload: skills,
	};
}
