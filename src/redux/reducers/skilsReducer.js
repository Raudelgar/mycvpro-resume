import { INIT_SKILLS } from 'redux/types.js';

export default function skillsReducer(state = {}, { type, payload }) {
	switch (type) {
		case INIT_SKILLS:
			return payload;
		default:
			return state;
	}
}
