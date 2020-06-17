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
	let url;

	//On Development
	//TODO: Remove for Production
	if (process.env.NODE_ENV === 'development') {
		url = 'wy0oc9ap0rj0u6euqdwqvrb';

		return Promise.resolve({ id: url });
	} else {
		const { cvid, usr, share } = queryString.parse(window.location.search);
		if (usr) console.log(usr);
		if (share) console.log(share);

		return new Promise((resolve, reject) => {
			if (cvid) {
				url = cvid;
				resolve({ id: url });
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
	// 			url = cvid;
	// 			resolve({ id: url });
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
	let url;

	if (NODE_ENV !== 'production') {
		url = services.messages.dev;
	} else {
		url = services.messages.prod;
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
		const response = await axios.post(url, DATA);
		const { data } = await response;
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function requestPdf(userId) {
	let url;

	if (NODE_ENV !== 'production') {
		url = services.genPdf.dev;
	} else {
		url = services.genPdf.prod;
	}

	const DATA = {
		userId,
	};

	try {
		const response = await axios.post(url, DATA);
		const { data } = await response;
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
}
