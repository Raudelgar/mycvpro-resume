import React, { createContext, useState } from 'react';

export const EmailContext = createContext();

export const EmailProvider = (props) => {
	const [isOpen, setOpen] = useState(false);
	const [miniBottom, setMiniBottom] = useState(false);
	const [miniScreen, setMiniScreen] = useState(true);

	const openEmailForm = () => setOpen(true);
	const cancelEmailForm = () => setOpen(false);
	const submitEmailForm = () => setOpen(false);
	const maxEmailBottom = () => setMiniBottom(false);
	const miniEmailBottom = () => setMiniBottom(true);
	const maxEmailScreen = () => setMiniScreen(false);
	const miniEmailScreen = () => setMiniScreen(true);

	return (
		<EmailContext.Provider
			value={{
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
			}}
		>
			{props.children}
		</EmailContext.Provider>
	);
};
