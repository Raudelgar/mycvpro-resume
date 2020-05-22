import { v4 as uuidv4 } from 'uuid';
import {
	generateTimestampFromStringDate,
	getDateFromTimestamp,
} from './helpers.js';

// function generateUID() {
// 	return (
// 		Math.random().toString(36).substring(2, 15) +
// 		Math.random().toString(36).substring(2, 15)
// 	);
// }

//mock user-id
//7i3ykuniv7su15p31ri2nn
const userId = '7i3ykuniv7su15p31ri2nn';

const usersInfo = [
	{
		[userId]: {
			id: userId,
			section: 'profile',
			name: 'Raudel Garcia',
			email: 'raudel24@gmail.com',
			phone: '+1(919)-592-6362',
			avatar_url:
				'https://media-exp1.licdn.com/dms/image/C5103AQHPZg4WFrUCZQ/profile-displayphoto-shrink_100_100/0?e=1595462400&v=beta&t=IemcBrohIPQNvPsdndr3NJqK6M6BD075E552J77uNVI',
		},
	},
];

const skills = [
	{
		[userId]: {
			id: userId,
			section: 'technical skills',
			content: [
				{
					contentId: uuidv4(),
					label: 'front-end',
					values: [
						'Javascript',
						'ReactJS',
						'Redux',
						'HTML5',
						'CSS3',
						'Sass',
						'D3JS',
					],
				},
				{
					contentId: uuidv4(),
					label: 'back-end',
					values: [
						'NodeJS',
						'ExpressJS',
						'MongoDB',
						'JavaEE',
						'SQL',
						'Oracle',
						'SpringBoot',
					],
				},
				{
					contentId: uuidv4(),
					label: 'build and deploy',
					values: ['NPM', 'Gulp', 'Webpack', 'Maven', 'Jenkins', 'Openshift'],
				},
				{
					contentId: uuidv4(),
					label: 'testing',
					values: [
						'JUnit4',
						'Mockito',
						'EasyMock',
						'PowerMockito',
						'Cucumber',
						'Mocha',
						'Chai',
					],
				},
				{
					contentId: uuidv4(),
					label: 'version control',
					values: ['Git', 'SVN', 'Jira', 'Github', 'Bitbucket'],
				},
				{
					contentId: uuidv4(),
					label: 'other',
					values: [
						'JDBC',
						'JPA',
						'HTTP',
						'Unix(Bash)',
						'TDD',
						'MVC',
						'REST',
						'Intellij',
						'VSCode',
					],
				},
			],
		},
	},
];

const experience = [
	{
		[userId]: {
			id: userId,
			section: 'work experience',
			content: [
				{
					contentId: uuidv4(),
					from: generateTimestampFromStringDate('01-11-2018'),
					to: new Date().getTime(),
					current: true,
					company: 'Deutsche Bank',
					location: 'Cary, NC',
					title: 'Full-Stack Software Engineer',
					note: '',
					description: [
						{
							taskId: uuidv4(),
							task:
								'Develop and maintain applications for the Agency of Security Lending Division (US, Europe).',
							subtasks: [
								{
									subtaskId: uuidv4(),
									subtask:
										'Leading role on the design and implementation of a brand new dashboard application (client-side) used by the trading desk and external clients. In order to achieve custom and on-demand charts, ReactJS, Redux, D3js, SASS and NodeJS, gave the support to this app. Our team follows the Agile methodology with two weeks’ sprints.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Create client side components and services using React/Redux.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Create a NodeJS service to provide a pdf, images and csv file on demand, using Puppeteer and PDFkit.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Upgrade our Java back-end reporting engine using Apache Velocity in order to auto generate strings values based on consumer defined rules.',
								},
								{
									subtaskId: uuidv4(),
									subtask: 'Coordinate and support Veracode Scans reports.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Mentor and train new team. Actively communicate in pull request’s reviews.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Use Jira/Confluence to distribute the work as well as maintain and update workflows and documentation.',
								},
							],
						},
					],
				},
				{
					contentId: uuidv4(),
					from: generateTimestampFromStringDate('01-14-2018'),
					to: generateTimestampFromStringDate('01-11-2018'),
					current: false,
					company: 'Railinc,Corp',
					location: 'Cary, NC',
					title: 'Software Engineer',
					note: '',
					description: [
						{
							taskId: uuidv4(),
							task:
								'Developed and maintained applications for the Railroad Industry.',
							subtasks: [
								{
									subtaskId: uuidv4(),
									subtask:
										'Contributed to update a suite of external web services using Spring Boot, Jasper Reports, Apache CXF, and Oracle database.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Updated and migrated legacy applications, by reviewing and fixing all necessary code and dependencies in order to compile it in newer environments, deploying to IBM WebSphere and Apache Tomcat servers.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Resolved production and test environment support application, in coordination with middleware tier.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Continuously drove best code quality, ensuring the highest coverage through unit and integration tests.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Used Agile methodology, designing and preparing technical documentation and following project requirements.',
								},
							],
						},
					],
				},
				{
					contentId: uuidv4(),
					from: generateTimestampFromStringDate('01-08-2017'),
					to: generateTimestampFromStringDate('01-04-2018'),
					current: false,
					company: 'Deutsche Bank',
					location: 'Cary, NC',
					title: 'Aplication Developer',
					note: '(through FDM Group)',
					description: [
						{
							taskId: uuidv4(),
							task:
								'Provided automation solutions for internal applications on the business operations of Global Prime Finance & Equity Trade Processing.',
							subtasks: [
								{
									subtaskId: uuidv4(),
									subtask:
										'Fundamental JEE on backend, Spring JDBC, XML file manipulation as data I/O.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Built SQL stored procedures based on client requests applied to Market Securities.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Implemented a dynamic test framework, sometimes changing or refactoring projects’ structure.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Implemented integration tests using the Cucumber framework.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Followed Test Driven Development and Behavior Driven Development using JUnit and Cucumber.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Followed Agile methodology sometimes leading scrums.',
								},
								{
									subtaskId: uuidv4(),
									subtask: 'Worked in collaboration with globally-based teams.',
								},
							],
						},
					],
				},
				{
					contentId: uuidv4(),
					from: generateTimestampFromStringDate('01-05-2017'),
					to: generateTimestampFromStringDate('01-08-2017'),
					current: false,
					company: 'FDM Group',
					location: 'New York, NY',
					title: 'Software Developer',
					note: '',
					description: [
						{
							taskId: uuidv4(),
							task:
								'Supported complex projects developing solutions to business problems focused on Financial Institutions.',
							subtasks: [
								{
									subtaskId: uuidv4(),
									subtask:
										'Worked across the full software development lifecycle, including design, development, testing, analysis, maintenance and ongoing support.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Implemented different applications using Java, Spring MVC, Web Development (HTML5, CSS3, JavaScript, JQuery, XML, XSD, XSLT), SQL, PL/SQL, Oracle and Unix scripting.',
								},
							],
						},
					],
				},
				{
					contentId: uuidv4(),
					from: generateTimestampFromStringDate('01-01-2017'),
					to: generateTimestampFromStringDate('01-05-2017'),
					current: false,
					company: 'Mauer Principles, Inc',
					location: 'Tampa, FL',
					title: 'Javascript Developer',
					note: '(consultant)',
					description: [
						{
							taskId: uuidv4(),
							task:
								'Implemented a React front end with a back-end NodeJS/MongoDB solutions for start-up application, which combine trading orders, periodic instructions and risk management rules consuming and interacting a Third party broker API.',
							subtasks: [
								{
									subtaskId: uuidv4(),
									subtask:
										'Met test coverage goals set for the project through creation of unit and functional tests.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Completed stories within estimated time with quality to ensure release dates.',
								},
							],
						},
					],
				},
				{
					contentId: uuidv4(),
					from: generateTimestampFromStringDate('01-12-2010'),
					to: generateTimestampFromStringDate('01-12-2016'),
					current: false,
					company: 'Rock Industruies, S.A',
					location: 'Panama City, Panama',
					title: 'Sr. Engineer and Project Manager',
					note: '',
					description: [
						{
							taskId: uuidv4(),
							task:
								'Developed applications to support the business operation, fundamentally used Java EE, as our core language.',
							subtasks: [
								{
									subtaskId: uuidv4(),
									subtask:
										'Initiated best practices that enhanced product definitions and customizations based on client’s needs.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Delegated work and coordinated functional development tasks as needed.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Drove innovation in development, managed releases and operation processes.',
								},
								{
									subtaskId: uuidv4(),
									subtask:
										'Navigated through all project stages, from Junior to Associated Engineer to Project Manager.',
								},
							],
						},
					],
				},
			],
		},
	},
];

const education = [
	{
		[userId]: {
			id: userId,
			section: 'education',
			content: [
				{
					contentId: uuidv4(),
					degree: 'Bachelor of Science in Telecommunications Engineering',
					college: 'Latin University of Panama',
					location: 'Panama City, Panama',
					note: '',
				},
				{
					contentId: uuidv4(),
					degree: 'Bachelor of Science in Telecommunications Engineering',
					college: 'Havana University of Technologies José Antonio Echeverría',
					location: 'Havana, Cuba',
					note: '(Transferred to Latin University of Panama, Panama)',
				},
			],
		},
	},
];

//################################***********##############################################
//Server API
function _getUserInfo(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = findById(id, usersInfo);
			resolve({ ...user[id] });
		}, 1000);
	});
}

function _getUserSkills(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const userSkills = findById(id, skills);
			resolve({ ...userSkills[id] });
		}, 1000);
	});
}

function _getUserExperience(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const userExperience = findById(id, experience);
			userExperience[id].content = userExperience[id].content.map((cont) => {
				const dateFrom = getDateFromTimestamp(cont.from);
				const dateTo = getDateFromTimestamp(cont.to);
				cont.from = `${dateFrom.month}/${dateFrom.year}`;
				cont.to = `${dateTo.month}/${dateTo.year}`;

				return cont;
			});
			resolve({ ...userExperience[id] });
		}, 1000);
	});
}

function _getUserEducation(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const userEducation = findById(id, education);
			resolve({ ...userEducation[id] });
		}, 1000);
	});
}

function findById(id, arr) {
	return arr.find((obj) => obj[id].id === id);
}

export function getUserData(id) {
	return Promise.all([
		_getUserInfo(id),
		_getUserSkills(id),
		_getUserExperience(id),
		_getUserEducation(id),
	]).then(([profile, skills, experience, education]) => ({
		profile,
		skills,
		experience,
		education,
	}));
}
