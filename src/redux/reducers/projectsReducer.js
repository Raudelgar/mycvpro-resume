import { INIT_PROJ } from 'redux/types.js';

export default function projectsReducer(state = {}, { type, payload }) {
	switch (type) {
		case INIT_PROJ:
			return payload;
		default:
			return state;
	}
}
