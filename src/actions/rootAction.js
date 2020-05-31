import { showLogoLoader, hideLogoLoader } from './logoLoaderAction.js';
import { fetchInitData, getUrlParams } from '../api/v1/api.js';
import { getProfile } from './profileAction.js';
import { getSkills } from './skillsAction.js';
import { getExperience } from './experienceAction.js';
import { getEducation } from './educationAction.js';

export function handleInitData() {
	return (dispatch) => {
		dispatch(showLogoLoader());
		//call API
		getUrlParams()
			.then(({ id }) => {
				fetchInitData(id)
					.then(({ profile, skills, experience, education }) => {
						dispatch(getProfile(profile));
						dispatch(getSkills(skills));
						dispatch(getExperience(experience));
						dispatch(getEducation(education));
					})
					.then((_) => dispatch(hideLogoLoader()));
			})
			.catch((error) => console.log('redirect to login page', error));
	};
}
