import { SHOW_LOGO_LOADER, HIDE_LOGO_LOADER } from '../actions/types.js';

export default function logoLoaderReducer(state = true, { type, payload }) {
	switch (type) {
		case SHOW_LOGO_LOADER:
			return true;
		case HIDE_LOGO_LOADER:
			return false;
		default:
			return state;
	}
}
