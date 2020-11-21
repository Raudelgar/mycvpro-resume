import React, { useContext } from 'react';

import { ThemeContext } from 'context/ThemeContext.js';
import useEducationState from 'hooks/useEducationState.js';
import SectionHeader from 'components/sections/SectionHeader.js';
import EducationContent from './EducationContent.js';

export default function EducationComponent() {
	const { theme } = useContext(ThemeContext);
	const { section, content } = useEducationState();

	return (
		<div className={`${theme}-grid-item`}>
			<SectionHeader header={section} theme={theme} />
			<EducationContent content={content} theme={theme} />
		</div>
	);
}
