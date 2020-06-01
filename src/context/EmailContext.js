import React, { createContext, useState } from 'react';

export const EmailContext = createContext();

export const EmailProvider = (props) => {
	const [isOpen, setOpen] = useState(false);

	const openEmailForm = () => setOpen(true);
	const cancelEmailForm = () => setOpen(false);
	const submitEmailForm = () => setOpen(false);

	return (
		<EmailContext.Provider
			value={{ isOpen, openEmailForm, cancelEmailForm, submitEmailForm }}
		>
			{props.children}
		</EmailContext.Provider>
	);
};
