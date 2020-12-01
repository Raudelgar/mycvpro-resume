import React, { useContext } from 'react';
import PdfComponent from 'components/icons/PdfComponent';
import MessagesComponent from 'components/icons/MessagesComponent';
import CopyLinkComponent from 'components/icons/CopyLinkComponent';
import ThemeComponent from 'components/icons/ThemeComponent';
import { ThemeContext } from 'context/ThemeContext.js';

export default function SettingMenu() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`${theme}-menu-icons`}>
			<PdfComponent />
			<MessagesComponent />
			<CopyLinkComponent />
			<ThemeComponent />
		</div>
	);
}
