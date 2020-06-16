const services = {
	users: {
		dev: 'http://localhost:5000/users?cvid=',
		prod:
			'https://us-central1-cvcodepro-resume-node-9432d.cloudfunctions.net/cvrApp/users?cvid=',
	},
	messages: {
		dev: 'http://localhost:5000/messages',
		prod:
			'https://us-central1-cvcodepro-resume-node-9432d.cloudfunctions.net/cvrApp/messages',
	},
};

export default services;