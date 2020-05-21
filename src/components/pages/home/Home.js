import React, { useContext } from 'react';

import './home.scss';
import { ThemeContext } from '../../../context/Context.js';
import SkillsComponent from '../../sections/skills/SkillsComponent.js';
import ExperienceComponent from '../../sections/experience/ExperienceComponent.js';
import EducationComponent from '../../sections/education/EducationComponent';

export default function Home() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className='main-container'>
			<div className='grid-container'>
				<SkillsComponent />
				<ExperienceComponent />
				<EducationComponent />
			</div>
		</div>
	);
}
