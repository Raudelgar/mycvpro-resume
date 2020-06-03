import React, { createContext, useState } from 'react';

export const EmailContext = createContext();

export const EmailProvider = (props) => {
	const [isOpen, setOpen] = useState(false);
	const [miniBottom, setMiniBottom] = useState(false);
	const [miniScreen, setMiniScreen] = useState(false);

	const openEmailForm = () => setOpen(true);
	const cancelEmailForm = () => setOpen(false);
	const submitEmailForm = () => setOpen(false);
	const minimaxEmail = () => setMiniBottom((curr) => !curr);
	const minimaxScreen = () => setMiniScreen((curr) => !curr);

	return (
		<EmailContext.Provider
			value={{
				isOpen,
				miniBottom,
				miniScreen,
				openEmailForm,
				cancelEmailForm,
				submitEmailForm,
				minimaxEmail,
				minimaxScreen,
			}}
		>
			{props.children}
		</EmailContext.Provider>
	);
};
