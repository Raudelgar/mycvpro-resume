import axios from 'axios';
import queryString from 'query-string';
import services from '../services.js';
const NODE_ENV = process.env.NODE_ENV;

export async function fetchInitData(id) {
	let url;

	if (NODE_ENV !== 'production') {
		url = `${services.users.dev}${id}`;
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
		} = data.payload.user;
		return {
			profile: userInfo,
			skills: userSkills,
			experience: userExperience,
			education: userEduction,
		};
	} catch (error) {
		console.log(error);
	}
}

export function getUrlParams() {
	let urlId;

	//On Development
	//TODO: Remove for Production
	if (process.env.NODE_ENV === 'development') {
		urlId = '75hgz3y5sfqb04hi17pu5b';

		return Promise.resolve({ id: urlId });
	} else {
		const { cvid, usr, share } = queryString.parse(window.location.search);
		if (usr) console.log(usr);
		if (share) console.log(share);

		return new Promise((resolve, reject) => {
			if (cvid) {
				urlId = cvid;
				resolve({ id: urlId });
			} else {
				reject('No query params');
			}
		});
	}

	//TODO: PROD Code
	// const { cvid, usr, share } = queryString.parse(window.location.search);
	// 	if (usr) console.log(usr);
	// 	if (share) console.log(share);

	// 	return new Promise((resolve, reject) => {
	// 		if (cvid) {
	// 			urlId = cvid;
	// 			resolve({ id: urlId });
	// 		} else {
	// 			reject('No query params');
	// 		}
	// 	});
}

export async function sendMessages(
	name,
	company,
	email,
	subject,
	content,
	profile
) {
	let urlMessages;

	if (NODE_ENV !== 'production') {
		urlMessages = services.messages.dev;
	} else {
		urlMessages = services.messages.prod;
	}

	const DATA = {
		name,
		company,
		from: email,
		to: profile.email,
		subject,
		content,
	};
	// console.log(URL);
	// console.log(name, company, email, subject, content);
	// console.log(profile);
	try {
		const response = await axios.post(urlMessages, DATA);
		const { data } = await response;
		return data;
	} catch (error) {
		console.log(error);
	}
}
