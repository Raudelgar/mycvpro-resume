import { showLoader, hideLoader } from './loaderAction.js';
import { fetchInitData, getUrlParams } from '../api/v1/api.js';
import { getProfile } from './profileAction.js';
import { getSkills } from './skillsAction.js';
import { getExperience } from './experienceAction.js';
import { getEducation } from './educationAction.js';

export function handleInitData() {
	return (dispatch) => {
		dispatch(showLoader('main'));
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
					.catch((err) => console.log(err))
					.then(() => dispatch(hideLoader()));
			})
			.catch((error) => console.log('redirect to login page', error));
	};
}
