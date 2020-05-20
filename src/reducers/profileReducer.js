import { INIT_DATA } from '../actions/types.js';

export default function profileReducer(state = {}, { type, payload }) {
	switch (type) {
		case INIT_DATA:
			return payload;
		default:
			return state;
	}
}
