import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import useEmailState from 'hooks/useEmailState';

export const EmailContext = createContext();

export const EmailProvider = (props) => {
	const [isOpen, setOpen] = useState(false);
	const [miniBottom, setMiniBottom] = useState(false);
	const [miniScreen, setMiniScreen] = useState(true);
	const {
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
	} = useEmailState();

	const openEmailForm = () => setOpen(true);
	const cancelEmailForm = () => setOpen(false);
	const submitEmailForm = () => setOpen(false);
	const maxEmailBottom = () => setMiniBottom(false);
	const miniEmailBottom = () => setMiniBottom(true);
	const maxEmailScreen = () => {
		if (miniBottom) {
			maxEmailBottom();
		} else {
			setMiniScreen(false);
		}
	};
	const miniEmailScreen = () => {
		if (miniBottom) {
			maxEmailBottom();
		} else {
			setMiniScreen(true);
		}
	};

	let attr = {
		isOpen,
		miniBottom,
		miniScreen,
		openEmailForm,
		cancelEmailForm,
		submitEmailForm,
		miniEmailBottom,
		maxEmailBottom,
		maxEmailScreen,
		miniEmailScreen,
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

	return (
		<EmailContext.Provider value={{ ...attr }}>
			{props.children}
		</EmailContext.Provider>
	);
};

EmailProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
