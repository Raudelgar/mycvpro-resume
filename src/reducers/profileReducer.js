import { INIT_PROFILE } from 'actions/types.js';

export default function profileReducer(state = {}, { type, payload }) {
	switch (type) {
		case INIT_PROFILE:
			return payload;
		default:
			return state;
	}
}
