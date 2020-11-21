import axios from 'axios';
import queryString from 'query-string';
import services from 'api/services.js';
import pdfTemplate from 'resources/template.js';
const NODE_ENV = process.env.NODE_ENV;

export async function fetchInitData(id) {
	let url;

	if (NODE_ENV !== 'production') {
		// url = `${services.users.dev}${id}`;
		url = `${services.users.prod}${id}`;
	} else {
		url = `${services.users.prod}${id}`;
	}

	try {
		const response = await axios.get(url);
		const { data } = await response;

		const {
			userInfo,
			userSkills,
			userExperience,
			userEduction,
			userProjects,
		} = data.payload.user;
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

export function getUrlParams() {
	let url;

	const { cvid } = queryString.parse(window.location.search);

	return new Promise((resolve, reject) => {
		if (cvid) {
			url = cvid;
			resolve({ id: url });
		} else {
			reject('No query params');
		}
	});
}

export async function sendMessages(
	name,
	company,
	email,
	subject,
	content,
	profile
) {
	let baseUrl;

	if (NODE_ENV !== 'production') {
		baseUrl = services.messages.dev;
	} else {
		baseUrl = services.messages.prod;
	}

	const URL = `${baseUrl}${profile.id}`;
	const DATA = {
		name,
		company,
		from: email,
		to: profile.email,
		subject,
		content,
	};

	try {
		const response = await axios.post(URL, DATA);
		const { data } = await response;
		return data;
	} catch (error) {
		console.log(error);
	}
}

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
