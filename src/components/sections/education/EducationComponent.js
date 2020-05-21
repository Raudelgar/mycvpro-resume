import React, { useContext } from 'react';

import { ThemeContext } from '../../../context/Context.js';
import useEducationState from '../../../hooks/useEducationState.js';
import SectionHeader from '../SectionHeader.js';
// import SkillContent from './SkillContent.js';

export default function EducationComponent() {
	const { theme } = useContext(ThemeContext);
	const { section, content } = useEducationState();
	// console.log(section, content);
	return (
		<div className={`${theme}-grid-item`}>
			<SectionHeader header={section} theme={theme} />
			{JSON.stringify(content, null, 2)}
		</div>
	);
}
