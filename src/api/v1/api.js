import axios from 'axios';
import queryString from 'query-string';
import { getUserData } from '../../utils/_MockData.js';
import services from '../services.js';
const NODE_ENV = process.env.NODE_ENV;

export function fetchInitData(id) {
	return getUserData(id).then((res) => res);
}

export function getUrlParams() {
	let urlId;

	//On Development
	//TODO: Remove for Production
	if (process.env.NODE_ENV === 'development') {
		urlId = '7i3ykuniv7su15p31ri2nn';

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
