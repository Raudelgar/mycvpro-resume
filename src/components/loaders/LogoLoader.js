import React from 'react';

import { IoIosDocument } from 'react-icons/io';
import './loaders.scss';

export default function LogoLoader() {
	return (
		<div className='bg-loader'>
			<div className='logo-container loader-center'>
				<IoIosDocument className='logo-icon'></IoIosDocument>
				<div className='circle-container'></div>
				<div className='logo-label'>Cv</div>
			</div>
		</div>
	);
}
