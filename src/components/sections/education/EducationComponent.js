import React, { useContext } from 'react';
import {useSelector} from 'react-redux';
import { ThemeContext } from 'context/ThemeContext.js';
import SectionHeader from 'components/sections/SectionHeader.js';
import EducationContent from './EducationContent.js';

export default function EducationComponent() {
	const { theme } = useContext(ThemeContext);
	const { section, content } =  useSelector(store => store.education);

	return (
		<div className={`${theme}-grid-item`}>
			<SectionHeader header={section} theme={theme} />
			<EducationContent content={content} theme={theme} />
		</div>
	);
}
