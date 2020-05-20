import { showLogoLoader, hideLogoLoader } from './logoLoaderAction.js';
import { fetchInitData } from '../api/v1/api.js';
import { getProfile } from './profileAction.js';
import { getSkills } from './skillsAction.js';

export function handleInitData(id) {
	return (dispatch) => {
		dispatch(showLogoLoader());
		//call API
		fetchInitData(id)
			.then(({ profile, skills, experience, education }) => {
				console.log(experience, education) || dispatch(getProfile(profile));
				dispatch(getSkills(skills));
			})
			.then((_) => dispatch(hideLogoLoader()));
	};
}
