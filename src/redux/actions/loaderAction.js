import { SHOW_LOADER, HIDE_LOADER } from 'redux/types.js';

export function showLoader(scope = '') {
	return {
		type: SHOW_LOADER,
		scope,
	};
}

export function hideLoader(scope = '') {
	return {
		type: HIDE_LOADER,
		scope,
	};
}
