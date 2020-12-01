import { useState } from 'react';

export default function useEmailState() {
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [content, setContent] = useState('');

	const handleName = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const handleCompany = (e) => {
		e.preventDefault();
		setCompany(e.target.value);
	};

	const handleEmail = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};

	const handleSubject = (e) => {
		e.preventDefault();
		setSubject(e.target.value);
	};

	const handleContent = (e) => {
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
		handleName,
		handleCompany,
		handleEmail,
		handleSubject,
		handleContent,
		cleanUpForm,
		discardEmailContent,
	};
}
