import { INIT_EXPE } from 'redux/types.js';

export default function experienceReducer(state = {}, { type, payload }) {
	switch (type) {
		case INIT_EXPE:
			return payload;
		default:
			return state;
	}
}
