import React from 'react';

import './home.scss';
import SkillsComponent from 'components/sections/skills/SkillsComponent.js';
import ExperienceComponent from 'components/sections/experience/ExperienceComponent.js';
import EducationComponent from 'components/sections/education/EducationComponent.js';

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
