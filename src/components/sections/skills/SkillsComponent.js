import React, { useContext } from 'react';

import { ThemeContext } from '../../../context/Context.js';
import useSkillsState from '../../../hooks/useSkillsState.js';
import SectionHeader from '../SectionHeader.js';

export default function SkillsComponent() {
	const { theme } = useContext(ThemeContext);
	const { section, content } = useSkillsState();
	console.log(section, content);
	return (
		<div className={`${theme}-grid-item`}>
			<SectionHeader header={section} theme={theme} />
		</div>
	);
}
