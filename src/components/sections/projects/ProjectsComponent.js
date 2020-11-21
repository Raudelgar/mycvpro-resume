import React, { useContext } from 'react';

import { ThemeContext } from 'context/ThemeContext.js';
import useProjectsState from 'hooks/useProjectsState.js';
import SectionHeader from 'components/sections/SectionHeader.js';
import ProjectsContent from './ProjectsContent.js';

export default function ProjectsComponent() {
	const { theme } = useContext(ThemeContext);
	const { section, content } = useProjectsState();

	return (
		<div className={`${theme}-grid-item`}>
			<SectionHeader header={section} theme={theme} />
			<ProjectsContent content={content} theme={theme} />
		</div>
	);
}
