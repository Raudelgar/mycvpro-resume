import React, { useContext } from 'react';

import './home.scss';
import { ThemeContext } from '../../../context/Context.js';

export default function Home() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className='main-container'>
			<div className='grid-container'>
				<div className={`${theme}-grid-item`}></div>
				<div className={`${theme}-grid-item`}></div>
				<div className={`${theme}-grid-item`}></div>
				<div className={`${theme}-grid-item`}></div>
			</div>
		</div>
	);
}
