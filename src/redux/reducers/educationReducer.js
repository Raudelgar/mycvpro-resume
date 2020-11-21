import { INIT_EDU } from 'redux/types.js';

export default function educationReducer(state = {}, { type, payload }) {
	switch (type) {
		case INIT_EDU:
			return payload;
		default:
			return state;
	}
}
