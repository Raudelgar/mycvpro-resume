import { INIT_DATA } from './types.js';

export function getProfile(profile) {
	return {
		type: INIT_DATA,
		payload: profile,
	};
}
