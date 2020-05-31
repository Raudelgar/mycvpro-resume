import queryString from 'query-string';
import { getUserData } from '../../utils/_MockData.js';

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
