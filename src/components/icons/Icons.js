import React from 'react';

import './icons.scss';
import PdfComponent from './PdfComponent';
import MessagesComponent from './MessagesComponent';
import CopyLinkComponent from './CopyLinkComponent';
import ThemeComponent from './ThemeComponent';

export default function Icons({ collapse }) {
	return (
		<>
			<PdfComponent collapse={collapse} />
			<MessagesComponent collapse={collapse} />
			<CopyLinkComponent collapse={collapse} />
			<ThemeComponent collapse={collapse} />
		</>
	);
}
