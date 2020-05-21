import React, { useContext } from 'react';

import Icons from '../icons/Icons.js';
import { ThemeContext } from '../../context/Context.js';
import './settingMenu.scss';

export default function SettingMenu() {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<div className='setting-menu-container'>
				<div className={`${theme}-menu-icons`}>
					<Icons collapse={true} />
				</div>
			</div>
			<div className='collapse-menu-container'>
				<div className={`${theme}-menu-icons`}>
					<Icons collapse={true} />
				</div>
			</div>
		</>
	);
}
