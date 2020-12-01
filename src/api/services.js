import axios from 'axios';
import queryString from 'query-string';
import api from 'api/v1/api.js';
import pdfTemplate from 'resources/template.js';
const NODE_ENV = process.env.NODE_ENV;
let baseURL;

if (NODE_ENV !== 'production') {
	baseURL = api.domain.dev;
} else {
	baseURL = api.domain.prod;
}

/**
 * @description Axios global instance
 */
const axiosCV = axios.create({
	baseURL,
});

/**
 * @description Fetching user data based on user's unique id
 * @method GET
 * @param {string} id
 * @returns {object} - user's data
 * @author Raudel Garcia
 */
export async function fetchInitData(id) {
	const URL = api.routes.users;
	const params = {
		[api.params.cvid]: id,
	};

	try {
		const response = await axiosCV.get(URL, { params });
		const { user } = await response.data.payload;

		const {
			userInfo,
			userSkills,
			userExperience,
			userEduction,
			userProjects,
		} = user;
		return {
			profile: userInfo,
			skills: userSkills,
			experience: userExperience,
			education: userEduction,
			projects: userProjects,
		};
	} catch (error) {
		console.log(error);
	}
}

/**
 * @description Checking if browser's url has user's id in the params
 * @returns {Promise}
 * @author Raudel Garcia
 */
export function getUrlParams() {
	let urlParams;

	const { cvid } = queryString.parse(window.location.search);

	return new Promise((resolve, reject) => {
		if (cvid) {
			urlParams = cvid;
			resolve({ id: urlParams });
		} else {
			reject('No query params');
		}
	});
}

/**
 * @description Send a new messages to be persist under user's `messages` collection
 * @method POST
 * @param {string} name - Required
 * @param {string} company - Required
 * @param {string} email - Required
 * @param {string} subject - Optional
 * @param {string} content - Optional
 * @param {object} profile - Required
 * @returns {object} - status and messages
 * @author Raudel Garcia
 */
export async function sendMessages(
	name,
	company,
	email,
	subject,
	content,
	profile
) {
	const URL = api.routes.messages;
	const params = {
		[api.params.cvid]: profile.id,
	};
	const data = {
		name,
		company,
		from: email,
		to: profile.email,
		subject,
		content,
	};

	try {
		const response = await axiosCV.post(URL, data, { params });
		const result = await response.data;
		return result;
	} catch (error) {
		console.log(error);
	}
}

/**
 * @description This function request the PDF file based on user's information
 * @param {object} profile
 * @param {object} skills
 * @param {object} experience
 * @param {object} education
 * @param {object} projects
 * @returns {Promise} - resolve with PDF file download.
 */
export function generatePdf(profile, skills, experience, education, projects) {
	return new Promise((resolve, reject) => {
		const pdfMake = window.pdfMake;

		const fileName = profile.name.split(' ').join('');
		setTimeout(() => {
			pdfMake
				.createPdf(
					pdfTemplate(profile, skills, experience, education, projects)
				)
				.download(`${fileName}-CV`);
			resolve(true);
		}, 1000);
	});
}
