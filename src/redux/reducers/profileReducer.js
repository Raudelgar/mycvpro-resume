import { INIT_PROFILE } from 'redux/types.js';

export default function profileReducer(state = {}, { type, payload }) {
	switch (type) {
		case INIT_PROFILE:
			return payload;
		default:
			return state;
	}
}
