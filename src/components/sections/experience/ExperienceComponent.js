import React, { useContext } from 'react';

import { ThemeContext } from 'context/ThemeContext.js';
import useExperienceState from 'hooks/useExperienceState.js';
import SectionHeader from 'components/sections/SectionHeader.js';
import ExperienceContent from './ExperienceContent.js';

export default function ExperienceComponent() {
	const { theme } = useContext(ThemeContext);
	const { section, content } = useExperienceState();
	return (
		<div className={`${theme}-grid-item`}>
			<SectionHeader header={section} theme={theme} />
			<ExperienceContent content={content} theme={theme} />
		</div>
	);
}
