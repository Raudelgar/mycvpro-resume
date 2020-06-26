import { SHOW_LOADER, HIDE_LOADER } from '../actions/types.js';

export default function loaderReducer(
	state = { bool: true, scope: 'main' },
	{ type, scope }
) {
	switch (type) {
		case SHOW_LOADER:
			return {
				bool: true,
				scope,
			};
		case HIDE_LOADER:
			return {
				bool: false,
				scope,
			};
		default:
			return state;
	}
}
