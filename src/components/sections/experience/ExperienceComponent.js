import React, { useContext } from 'react';

import { ThemeContext } from '../../../context/Context.js';
import useExperienceState from '../../../hooks/useExperienceState.js';
import SectionHeader from '../SectionHeader.js';
import SectionContent from '../SectionContent.js';

export default function ExperienceComponent() {
	const { theme } = useContext(ThemeContext);
	const { section, content } = useExperienceState();
	return (
		<div className={`${theme}-grid-item`}>
			<SectionHeader header={section} theme={theme} />
			<SectionContent content={content} theme={theme} section='EXP' />
		</div>
	);
}
