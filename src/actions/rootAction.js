import { showLogoLoader, hideLogoLoader } from './logoLoaderAction.js';
import { fetchInitData } from '../api/v1/api.js';
import { getProfile } from './profileAction.js';
import { getSkills } from './skillsAction.js';
import { getExperience } from './experienceAction.js';
import { getEducation } from './educationAction.js';

export function handleInitData(id) {
	return (dispatch) => {
		dispatch(showLogoLoader());
		//call API
		fetchInitData(id)
			.then(({ profile, skills, experience, education }) => {
				console.log(profile, skills, experience, education) ||
					dispatch(getProfile(profile));
				dispatch(getSkills(skills));
				dispatch(getExperience(experience));
				dispatch(getEducation(education));
			})
			.then((_) => dispatch(hideLogoLoader()));
	};
}
