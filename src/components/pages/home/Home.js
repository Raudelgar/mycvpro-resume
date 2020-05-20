import React, { useContext } from 'react';

import './home.scss';
import { ThemeContext } from '../../../context/Context.js';
import SkillsComponent from '../../sections/skills/SkillsComponent.js';

export default function Home() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className='main-container'>
			<div className='grid-container'>
				<SkillsComponent />
				<div className={`${theme}-grid-item`}></div>
				<div className={`${theme}-grid-item`}></div>
				<div className={`${theme}-grid-item`}></div>
			</div>
		</div>
	);
}
