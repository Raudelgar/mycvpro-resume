export default function template(profile, skills, experience, education) {
	const fileName = profile.name.split(' ').join('');
	const emailWidth = calEmailWidth(profile.email);
	const emailIconWidth = 286 - emailWidth;
	const dd = {
		info: {
			title: `${fileName}-CV`,
			author: 'CvCodePro, Inc.',
			subject: `${profile.name} CV`,
			keywords: 'CV',
		},
		pageSize: 'A4',
		pageOrientation: 'portrait',
		pageMargins: [30, 50, 30, 40], // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
		header: function (currentPage, pageCount, pageSize) {
			return [
				{ text: `${profile.name}`, style: 'headerName' },
				{
					columns: [
						{
							width: emailIconWidth,
							svg:
								'<svg stroke="currentColor" fill="#05599e" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>',
							style: 'emailIcon',
							fit: [11, 11],
						},
						{
							width: 'auto',
							text: `${profile.email}`,
							style: 'headerInfo',
						},
						{
							width: 50,
							svg:
								'<svg stroke="currentColor" fill="#05599e" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M138.656 49.53l-.03 114.814 37.03-21.406-.03-11.844-.064-16.22 14.063 8.095 128.22 73.936-.033-50.53-.906.53-4.687 2.72-4.658-2.72-50.78-29.312-.094.062L138.656 49.53zm236.094 0l-99.313 57.314 36.75 21.187 10.282-5.968 14.03-8.124v16.218l.063 147.375 43.03-24.874-.5-.312-4.28-2.75v-5.125l-.032-58.626v-60.72l-.03-45.78V49.53zm-180.406 97.72V153.72l-4.688 2.718-142.97 82.593-.03-.06L20.594 254 120 311.406l.125-43.344-10.688-5.937-14.437-8 14.28-8.25 127.907-73.906-42.843-24.72zm61.53 35.5l-52.124 30.125 50.938 31.406 52.125-32.155-50.938-29.375zm137.595 13.906l.03 42.72 9.094 5.843 12.875 8.28-13.25 7.688L273 335.813l44.813 25.843v-6.468l4.687-2.688 52.28-30.188v-.156L492.814 254l-99.344-57.344zm-75.626 30.625L272.5 255.25l45.375 27.97-.03-55.94zm-141.375 1.345l-43.5 25.156 1.06.595 4.845 2.688-.03 5.53-.22 71.344.03 124.532 99.095-57.19-36.938-21.31-10.25 5.936-14.03 8.156v-16.218l-.063-149.22zm18.686.875l.03 51.47 41.72-25.72-41.75-25.75zm59.53 36.72l-49.436 30.5 49.094 28.31 49.437-28.53-49.092-30.28zm-59.5 46.28l.033 49.094.905-.53 4.656-2.69 4.69 2.688 50.968 29.407.25-.126L374.75 458.47l.03-114.595L336.5 366l.03 11.844.064 16.22-14.063-8.127L195.19 312.5z"></path></svg>',
							style: ['emailIcon', 'iconCenter'],
							fit: [11, 11],
						},
						{
							width: 10,
							svg:
								'<svg stroke="currentColor" fill="#05599e" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>',
							style: 'emailIcon',
							fit: [11, 11],
						},
						{
							width: 'auto',
							text: `${profile.phone}`,
							style: 'headerInfo',
						},
					],
				},
			];
		},
		footer: function (currentPage, pageCount) {
			return [
				{
					columns: [
						{
							width: '*',
							text: 'Powered By CvCodePro, Inc',
							style: 'footer',
						},
						{
							width: 245,
							text: `${currentPage.toString()} of ${pageCount}`,
							style: 'footerPage',
						},
					],
				},
			];
		},
		content: setContent(skills, experience, education),
		styles: {
			headerName: {
				margin: 5,
				fontSize: 12,
				alignment: 'center',
				color: '#05599e',
			},
			headerInfo: {
				alignment: 'left',
				fontSize: 12,
				color: '#05599e',
				lineHeight: 1.3,
				// margin:[0,0,0,10]
			},
			footer: {
				color: '#9F9F9F',
				fontSize: 10,
				margin: [0, 20, 0, 5],
				alignment: 'right',
			},
			footerPage: {
				fontSize: 10,
				margin: [0, 20, 10, 5],
				alignment: 'right',
			},
			sectionTitle: {
				fontSize: 13,
				color: '#05599e',
				bold: true,
				lineHeight: 1.3,
				margin: [0, 10, 0, 0],
			},
			sectionInfo: {
				fontSize: 11,
			},
			sectionSkills: {
				lineHeight: 1.3,
			},
			sectionLabel: {
				bold: true,
			},
			sectionNote: {
				fontSize: 8,
				italics: true,
			},
			sectionItemDesc: {
				lineHeight: 1.1,
				width: 'auto',
				margin: [60, 0, 5, 0],
				alignment: 'justify',
			},
			lastItem: {
				lineHeight: 1.3,
			},
			emailIcon: {
				alignment: 'right',
				margin: [0, 2.5, 8, 0],
			},
			iconCenter: {
				alignment: 'center',
			},
		},
	};
	return dd;
}

function setContent(skills, experience, education) {
	return [
		{
			stack: skillStack(skills),
		},
		{
			stack: experienceStack(experience),
		},
		{
			stack: educationStack(education),
		},
	];
}

function skillStack(skills) {
	let stack = [
		{
			text: `${skills.section}`,
			style: 'sectionTitle',
		},
		{
			text: [],
		},
	];

	for (let i = 0; i < skills.content.length; i++) {
		let skill = skills.content[i];
		let label = {
			text: `\u200B\t\u200B\t${skill.label}: `,
			style: ['sectionInfo', 'sectionLabel', 'sectionSkills'],
		};
		let values = {
			text: `${skill.values.join(', ')}\n`,
			style: ['sectionInfo', 'sectionItems'],
		};
		stack[1].text = stack[1].text.concat([label, values]);
	}

	return stack;
}

function experienceStack(experience) {
	let stack = [
		{
			text: `${experience.section}`,
			style: 'sectionTitle',
		},
		{
			stack: [],
		},
	];

	for (let i = 0; i < experience.content.length; i++) {
		let expe = experience.content[i];
		let expTask = {
			stack: [],
		};
		let descTask = {
			ol: [],
		};
		let title = {
			text: `\u200B\t\u200B\t${expe.title}\n`,
			style: ['sectionInfo', 'sectionLabel'],
		};
		let coAndLoc = {
			text: `\u200B\t\u200B\t${expe.company}, ${expe.location}\n`,
			style: ['sectionInfo', 'sectionLabel'],
		};
		let date = {
			text: `\u200B\t\u200B\t${expe.from} - ${
				expe.current ? 'Present' : expe.to
			}\n`,
			style: ['sectionInfo', 'sectionLabel'],
		};
		let note = {
			text: `\u200B\t\u200B\t\t${expe.note}\n`,
			style: ['sectionInfo', 'sectionLabel', 'sectionNote', 'lastItem'],
		};

		for (let j = 0; j < expe.description.length; j++) {
			let desc = expe.description[j];
			let task = {
				text: `${desc.task}\n`,
				style: ['sectionInfo', 'sectionItems', 'sectionItemDesc'],
			};
			let subTasks = {
				ul: [],
			};

			for (let k = 0; k < desc.subtasks.length; k++) {
				let subT = desc.subtasks[k];
				if (k === desc.subtasks.length - 1) {
					subTasks.ul.push({
						text: `${subT.subtask}\n\n`,
						style: ['sectionInfo', 'sectionItems', 'sectionItemDesc'],
					});
				} else {
					subTasks.ul.push({
						text: `${subT.subtask}`,
						style: ['sectionInfo', 'sectionItems', 'sectionItemDesc'],
					});
				}
			}
			descTask.ol.push(task, subTasks);
		}
		expTask.stack = expTask.stack.concat([
			title,
			coAndLoc,
			date,
			note,
			descTask,
		]);
		stack[1].stack = stack[1].stack.concat([expTask]);
	}

	return stack;
}

function educationStack(education) {
	let stack = [
		{
			text: `${education.section}`,
			style: 'sectionTitle',
		},
		{
			text: [],
		},
	];

	for (let i = 0; i < education.content.length; i++) {
		let edu = education.content[i];

		let degree = {
			text: `\u200B\t\u200B\t${edu.degree}\n`,
			style: ['sectionInfo', 'sectionLabel'],
		};

		let loc = {
			text: `\u200B\t\u200B\t${edu.college}. ${edu.location}\n`,
			style: ['sectionInfo', 'sectionItems', 'lastItem'],
		};

		if (edu.note) {
			let note = {
				text: `\u200B\t\u200B\t\t${edu.note}\n`,
				style: ['sectionInfo', 'sectionItems', 'sectionNote'],
			};
			stack[1].text = stack[1].text.concat([degree, note, loc]);
		} else {
			stack[1].text = stack[1].text.concat([degree, loc]);
		}
	}
	return stack;
}

function calEmailWidth(str) {
	const strLen = str.length;
	if (strLen <= 18) {
		return Math.ceil(strLen * 7);
	} else {
		return Math.floor(strLen * 6.3);
	}
}
