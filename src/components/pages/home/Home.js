import React from 'react';

import './home.scss';
import SkillsComponent from '../../sections/skills/SkillsComponent.js';
import ExperienceComponent from '../../sections/experience/ExperienceComponent.js';
import EducationComponent from '../../sections/education/EducationComponent';

export default function Home() {
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
