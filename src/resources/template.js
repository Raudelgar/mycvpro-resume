export default function template(profile, skills, experience, education) {
	const fileName = profile.name.split(' ').join('');
	const dd = {
		info: {
			title: `${fileName}-CV`,
			author: 'CvCodePro, Inc.',
			subject: `${profile.name} CV`,
			keywords: 'CV',
		},
		pageSize: 'A4',
		pageOrientation: 'portrait',
		pageMargins: [40, 60, 40, 20], // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
		header: function (currentPage, pageCount, pageSize) {
			return [
				{ text: `${profile.name}`, style: 'headerName' },
				{ text: `${profile.email}\t${profile.phone}`, style: 'headerInfo' },
			];
		},
		footer: function (currentPage, pageCount, pageSize) {
			return [
				{ text: 'Power By CvCodePro, Inc', style: ['headerInfo', 'footer'] },
			];
		},
		content: setContent(skills, experience, education),
		styles: {
			headerName: {
				margin: 5,
				fontSize: 13,
				alignment: 'center',
			},
			headerInfo: {
				alignment: 'center',
				// margin: [5, 0],
			},
			footer: {
				color: '#9F9F9F',
				fontSize: 10,
			},
			sectionTitle: {
				fontSize: 13,
				color: '#05599e',
				bold: true,
				lineHeight: 1.3,
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
		let values;
		if (i === skills.content.length - 1) {
			values = {
				text: `${skill.values.toString()}\n\n`,
				style: ['sectionInfo', 'sectionItems'],
			};
		} else {
			values = {
				text: `${skill.values.toString()}\n`,
				style: ['sectionInfo', 'sectionItems'],
			};
		}

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
			text: `\u200B\t\u200B\t\t${expe.note}\n\n`,
			style: ['sectionInfo', 'sectionLabel', 'sectionNote'],
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
			text: `\u200B\t\u200B\t${edu.college}. ${edu.location}\n\n`,
			style: ['sectionInfo', 'sectionItems'],
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
