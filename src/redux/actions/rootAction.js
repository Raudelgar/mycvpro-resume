import { showLoader, hideLoader } from './loaderAction.js';
import { fetchInitData, getUrlParams } from 'api/services';
import { getProfile } from './profileAction.js';
import { getSkills } from './skillsAction.js';
import { getExperience } from './experienceAction.js';
import { getEducation } from './educationAction.js';
import { hanldeError } from './errorAction.js';
import { getProjects } from './projectsAction.js';

export function handleInitData() {
	return (dispatch) => {
		dispatch(showLoader('main'));
		//call API
		getUrlParams()
			.then(({ id }) => {
				fetchInitData(id)
					.then(({ profile, skills, experience, education, projects }) => {
						dispatch(getSkills(skills));
						dispatch(getExperience(experience));
						dispatch(getEducation(education));
						dispatch(getProjects(projects));
						dispatch(getProfile(profile));
					})
					.catch((error) => {
						dispatch(hanldeError(error));
					})
					.then(() => dispatch(hideLoader()));
			})
			.catch((error) => {
				dispatch(hanldeError(error));
				dispatch(hideLoader());
			});
	};
}
