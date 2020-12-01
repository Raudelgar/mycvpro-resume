import React, { useContext } from 'react';
import {useSelector} from 'react-redux';
import { ThemeContext } from 'context/ThemeContext.js';
import SectionHeader from 'components/sections/SectionHeader.js';
import ExperienceContent from './ExperienceContent.js';

export default function ExperienceComponent() {
	const { theme } = useContext(ThemeContext);
	const { section, content } = useSelector(store => store.experience);
	return (
		<div className={`${theme}-grid-item`}>
			<SectionHeader header={section} theme={theme} />
			<ExperienceContent content={content} theme={theme} />
		</div>
	);
}
