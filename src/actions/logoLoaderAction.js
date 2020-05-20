import { SHOW_LOGO_LOADER, HIDE_LOGO_LOADER } from './types.js';

export function showLogoLoader() {
	return {
		type: SHOW_LOGO_LOADER,
		payload: true,
	};
}

export function hideLogoLoader() {
	return {
		type: HIDE_LOGO_LOADER,
		payload: false,
	};
}
