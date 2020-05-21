import { INIT_PROFILE } from './types.js';

export function getProfile(profile) {
	return {
		type: INIT_PROFILE,
		payload: profile,
	};
}
