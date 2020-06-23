import React, { useContext } from 'react';

import { ThemeContext } from '../../../context/ThemeContext.js';
import useSkillsState from '../../../hooks/useSkillsState.js';
import SectionHeader from '../SectionHeader.js';
import SkillContent from './SkillContent.js';

export default function SkillsComponent() {
	const { theme } = useContext(ThemeContext);
	const { section, content } = useSkillsState();

	return (
		<div id='section-skill' className={`${theme}-grid-item`}>
			<SectionHeader header={section} theme={theme} />
			<SkillContent content={content} theme={theme} />
		</div>
	);
}
