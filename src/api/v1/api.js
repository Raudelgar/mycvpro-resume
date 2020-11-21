const api = {
	domain:{
		dev: 'http://localhost:5000',
		prod:
			'https://us-central1-cvcodepro-resume-node-9432d.cloudfunctions.net/cvrApp',
	},
	routes:{
		users: '/users',
		messages: '/new-messages'
	},
	params:{
		cvid:'cvid'
	}
};

export default api;