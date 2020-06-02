import { useState } from 'react';

export default function useEmailState() {
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [content, setContent] = useState('');

	const hanldeName = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const hanldeCompany = (e) => {
		e.preventDefault();
		setCompany(e.target.value);
	};

	const hanldeEmail = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};

	const hanldeSubject = (e) => {
		e.preventDefault();
		setSubject(e.target.value);
	};

	const hanldeContent = (e) => {
		e.preventDefault();
		setContent(e.target.value);
	};

	const cleanUpForm = () => {
		setName('');
		setCompany('');
		setEmail('');
		setSubject('');
		setContent('');
	};

	const discardEmailContent = () => {
		setContent('');
	};

	return {
		name,
		company,
		email,
		subject,
		content,
		hanldeName,
		hanldeCompany,
		hanldeEmail,
		hanldeSubject,
		hanldeContent,
		cleanUpForm,
		discardEmailContent,
	};
}
