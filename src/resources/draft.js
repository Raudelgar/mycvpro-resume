// playground requires you to assign document definition to a variable called dd

var dd = {
	pageMargins: [30, 60, 20, 20], // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
	header: function (currentPage, pageCount, pageSize) {
		return [
			{ text: 'Raudel Garcia', style: 'headerName' },
			{ text: 'raudel@gmail.com\t+1(919)592-6362', style: 'headerInfo' },
		];
	},
	footer: function (urrentPage, pageCount, pageSize) {
		return [
			{ text: 'Power By CvCodePro, Inc', style: ['headerInfo', 'footer'] },
		];
	},
	content: [
		{
			stack: [
				{ text: 'Technical Skills', style: 'sectionTitle' },
				{
					text: [
						{
							text: '\u200B\t\u200B\tFront-End: ',
							style: ['sectionInfo', 'sectionLabel', 'sectionSkills'],
						},
						{
							text: 'Javascript, ReactJS, Redux, HTML5, CSS3, Sass, D3JS\n',
							style: ['sectionInfo', 'sectionItems'],
						},
						{
							text: '\u200B\t\u200B\tBack-End: ',
							style: ['sectionInfo', 'sectionLabel', 'sectionSkills'],
						},
						{
							text: 'NodeJS,ExpressJS,MongoDB,JavaEE,SQL,Oracle,SpringBoot\n',
							style: ['sectionInfo', 'sectionItems'],
						},
						{
							text: '\u200B\t\u200B\tBuild and Deploy: ',
							style: ['sectionInfo', 'sectionLabel', 'sectionSkills'],
						},
						{
							text: 'NPM,Gulp,Webpack,Maven,Jenkins,Openshift\n',
							style: ['sectionInfo', 'sectionItems'],
						},
						{
							text: '\u200B\t\u200B\tTesting: ',
							style: ['sectionInfo', 'sectionLabel', 'sectionSkills'],
						},
						{
							text:
								'JUnit4,Mockito,EasyMock,PowerMockito,Cucumber,Mocha,Chai\n',
							style: ['sectionInfo', 'sectionItems'],
						},
						{
							text: '\u200B\t\u200B\tVersion Control: ',
							style: ['sectionInfo', 'sectionLabel', 'sectionSkills'],
						},
						{
							text: 'Git,SVN,Jira,Github,Bitbucket\n',
							style: ['sectionInfo', 'sectionItems'],
						},
						{
							text: '\u200B\t\u200B\tOthers: ',
							style: ['sectionInfo', 'sectionLabel', 'sectionSkills'],
						},
						{
							text: 'JDBC,JPA,HTTP,Unix(Bash),TDD,MVC,REST,Intellij,VSCode\n\n',
							style: ['sectionInfo', 'sectionItems'],
						},
					],
				},
			],
		},
		{
			stack: [
				{ text: 'Work Experience', style: 'sectionTitle' },
				{
					stack: [
						{
							stack: [
								{
									text: '\u200B\t\u200B\tFull-Stack Software Engineer\n',
									style: ['sectionInfo', 'sectionLabel'],
								},
								{
									text: '\u200B\t\u200B\tDeutsche Bank, Cary, NC\n',
									style: ['sectionInfo', 'sectionLabel'],
								},
								{
									text: '\u200B\t\u200B\t11/2018 - Present\n',
									style: ['sectionInfo', 'sectionLabel'],
								},
								{
									text: '\u200B\t\u200B\t\t(Through FDM Group)\n\n',
									style: ['sectionInfo', 'sectionLabel', 'sectionNote'],
								},
								{
									ol: [
										{
											text:
												'Develop and maintain applications for the Agency of Security Lending Division (US, Europe).\n',
											style: ['sectionInfo', 'sectionItems', 'sectionItemDesc'],
										},
										{
											ul: [
												{
													text:
														'Leading role on the design and implementation of a brand new dashboard application (client-side) used by the trading desk and external clients. In order to achieve custom and on-demand charts, ReactJS, Redux, D3js, SASS and NodeJS, gave the support to this app. Our team follows the Agile methodology with two weeks’ sprints.',
													style: [
														'sectionInfo',
														'sectionItems',
														'sectionItemDesc',
													],
												},
												{
													text:
														'Create client side components and services using React/Redux.',
													style: [
														'sectionInfo',
														'sectionItems',
														'sectionItemDesc',
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
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
