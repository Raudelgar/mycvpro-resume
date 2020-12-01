import { INIT_PROFILE } from 'redux/types.js';

export function getProfile(profile) {
	return {
		type: INIT_PROFILE,
		payload: profile,
	};
}
