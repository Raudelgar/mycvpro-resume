import React, { useContext } from 'react';
import {useSelector} from 'react-redux';
import { ThemeContext } from 'context/ThemeContext.js';
import SectionHeader from 'components/sections/SectionHeader.js';
import SkillContent from './SkillContent.js';

export default function SkillsComponent() {
	const { theme } = useContext(ThemeContext);
	const { section, content } = useSelector(store => store.skills);

	return (
		<div id='section-skill' className={`${theme}-grid-item`}>
			<SectionHeader header={section} theme={theme} />
			<SkillContent content={content} theme={theme} />
		</div>
	);
}
