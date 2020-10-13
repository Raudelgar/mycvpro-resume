import { INIT_PROJ } from './types.js';

export function getProjects(projects) {
	return {
		type: INIT_PROJ,
		payload: projects,
	};
}
