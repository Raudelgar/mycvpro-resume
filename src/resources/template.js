export default function template(
	profile,
	skills,
	experience,
	education,
	projects
) {
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
		pageMargins: [30, 70, 30, 40], // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
		header: function (currentPage, pageCount, pageSize) {
			return [
				{ text: `${profile.name}`, style: 'headerName' },
				{
					columns: [
						{
							width: 180,
							text: '',
						},
						{
							width: 'auto',
							text: 'raudel24@gmail.com',
							style: 'headerInfo',
						},
						{
							width: 10,
							text: '',
						},
						{
							width: 'auto',
							text: '.',
							style: 'headerDot',
						},
						{
							width: 10,
							text: '',
						},
						{
							width: 'auto',
							text: '+1(919)592-6362',
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
		content: setContent(skills, experience, education, projects),
		styles: {
			headerName: {
				margin: 5,
				fontSize: 11,
				alignment: 'center',
				color: '#05599e',
			},
			headerInfo: {
				alignment: 'center',
				fontSize: 11,
				color: '#05599e',
				lineHeight: 1.3,
				// margin:[0,0,0,10]
			},
			headerDot: {
				fontSize: 40,
				alignment: 'center',
				color: '#05599e',
				margin: [0, -27, 0, 0],
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
				fontSize: 11,
				color: '#05599e',
				bold: true,
				lineHeight: 1.3,
				margin: [0, 7, 0, 0],
			},
			sectionInfo: {
				fontSize: 10,
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

function setContent(skills, experience, education, projects) {
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
		{
			stack: projectsStack(projects),
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
	let mainStack = [
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
		let expHeaderTask = {
			columns: [],
		};
		let descTask = {
			type: 'square',
			ul: [],
		};

		//Header sections
		let title = {
			text: `\u200B\t\u200B\t${expe.title}\n`,
			style: ['sectionInfo', 'sectionLabel'],
		};
		let coAndLoc = {
			text: `\u200B\t\u200B\t${expe.company}, ${expe.location}\n`,
			style: ['sectionInfo', 'sectionLabel'],
		};
		let date = {
			width: 130,
			text: `\u200B\t\u200B\t${expe.from} - ${
				expe.current ? 'Present' : expe.to
			}\n`,
			style: ['sectionInfo', 'sectionLabel'],
		};
		let note = {
			text: `\u200B\t\u200B\t\t${expe.note}\n`,
			style: ['sectionInfo', 'sectionLabel', 'sectionNote', 'lastItem'],
		};

		//filling experience header
		let leftSideStack = [];
		leftSideStack.push(title);
		leftSideStack.push(coAndLoc);
		leftSideStack.push(note);
		expHeaderTask.columns = [].concat([{ stack: leftSideStack }], [date]);

		for (let j = 0; j < expe.description.length; j++) {
			let desc = expe.description[j];
			let task = {
				text: `${desc.task}\n`,
				style: ['sectionInfo', 'sectionItems', 'sectionItemDesc'],
			};
			let subTasks = {
				type: 'circle',
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
			descTask.ul.push(task, subTasks);
		}
		expTask.stack = expTask.stack.concat([expHeaderTask, descTask]);
		mainStack[1].stack = mainStack[1].stack.concat([expTask]);
	}

	return mainStack;
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

function projectsStack(projects) {
	let stack = [
		{
			text: `${projects.section}`,
			style: 'sectionTitle',
		},
	];

	for (let i = 0; i < projects.content.length; i++) {
		let proj = projects.content[i];

		let projName = {
			text: `\u200B\t\u200B\t${proj.name}\n`,
			style: ['sectionInfo', 'sectionLabel'],
		};

		let desc = {
			columns: [
				{
					width: 'auto',
					margin: [30, 0, 5, 5],
					text: proj.description,
					style: ['sectionInfo', 'sectionItems'],
				},
			],
		};

		let anchor = {
			text: `\u200B\t\u200B\t${proj.anchor}`,
			link: proj.link,
		};

		if (proj.note) {
			let note = {
				text: `\u200B\t\u200B\t\t${proj.note}\n`,
				style: ['sectionInfo', 'sectionItems', 'sectionNote'],
			};
			stack.push(projName);
			stack.push(desc);
			stack.push(note);
			stack.push(anchor);
		} else {
			stack.push(projName);
			stack.push(desc);
			stack.push(anchor);
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
