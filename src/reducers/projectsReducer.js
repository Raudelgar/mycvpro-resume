import { INIT_PROJ } from '../actions/types.js';

export default function projectsReducer(state = {}, { type, payload }) {
	switch (type) {
		case INIT_PROJ:
			return payload;
		default:
			return state;
	}
}
