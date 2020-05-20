import { showLogoLoader, hideLogoLoader } from './logoLoaderAction.js';
import { fetchInitData } from '../api/v1/api.js';

export function handleInitData(id) {
	return (dispatch) => {
		dispatch(showLogoLoader());
		//call API
		fetchInitData(id)
			.then((res) => console.log(res))
			.then((_) => dispatch(hideLogoLoader()));
	};
}
