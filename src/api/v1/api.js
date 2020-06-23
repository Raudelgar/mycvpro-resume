import axios from 'axios';
import queryString from 'query-string';
import services from '../services.js';
import { pdfSelector } from '../../hooks/useSelectorHelper.js';
import pdfTemplate from '../../resources/template.js';
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
		url = 'ux0h1yncy291wmwdbwhvk2';

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

export function generatePdf(profile, skills, experience, education) {
	return new Promise((resolve, reject) => {
		const pdfMake = window.pdfMake;

		const fileName = profile.name.split(' ').join('');
		setTimeout(() => {
			pdfMake
				.createPdf(pdfTemplate(profile, skills, experience, education))
				.download(`${fileName}-CV`);
			resolve(true);
		}, 1000);
	});
}

/* 
export function generatePdf(name) {
	let fileName = name.split(' ').join('');
	let margins = {
		left: 15,
		top: 15,
		width: 563,
		height: 750,
	};

	function headerFooterFormatting(doc) {
		const totalPages = doc.internal.getNumberOfPages();

		for (let i = totalPages; i >= 1; i--) {
			doc.setPage(i);
			header(doc);
			// footer(doc, i, totalPages);
		}
	}

	function header(doc) {
		doc.setFontSize(30);
		doc.setTextColor(40);
		doc.setFontStyle('normal');

		doc.text('Testing a Header Template', margins.left + 50, 40);
		doc.line(3, 70, margins.width, 70);
	}
	return new Promise((resolve, reject) => {
		const template = window.document.getElementById('pdf');
		const pdf = new jsPDF();
		pdf.setFontSize(10);
		html2canvas(template, { scale: 3 })
			.then((canvas) => {
				pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 5, 40, 211, 298);
				pdf.save(`${fileName}.pdf`);
			})
			.then(() => {
				setTimeout(() => resolve(true), 1000);
			});

		// doc.fromHTML(
		// 	template,
		// 	margins.left,
		// 	margins.top,
		// 	{ width: margins.width },
		// 	() => {
		// 		// headerFooterFormatting(doc);
		// 	},
		// 	margins
		// );
		// doc.addPage([2], 'p');
		// doc.fromHTML(
		// 	'Hello World',
		// 	margins.left,
		// 	margins.top,
		// 	{ width: margins.width },
		// 	() => {
		// 		// headerFooterFormatting(doc);
		// 	},
		// 	margins
		// );
		// doc.save(`${fileName}-cv.pdf`, { returnPromise: true }).then(() => {
		// 	setTimeout(() => resolve(), 1000);
		// });
	});
}
*/
