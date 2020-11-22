import { INIT_SKILLS } from 'redux/types.js';

export function getSkills(skills) {
	return {
		type: INIT_SKILLS,
		payload: skills,
	};
}
