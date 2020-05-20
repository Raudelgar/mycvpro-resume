import { getUserData } from '../../utils/_MockData.js';

export function fetchInitData(id) {
	return getUserData(id).then((res) => res);
}
