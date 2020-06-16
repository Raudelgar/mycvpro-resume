import React from 'react';

import './loaders.scss';
import { IoIosDocument } from 'react-icons/io';
import useLoaderState from '../../hooks/useLoaderState.js';

export default function LogoLoader() {
	const isLoading = useLoaderState();

	if (isLoading.bool && isLoading.scope === 'main') {
		return (
			<div className='bg-loader'>
				<div className='logo-container loader-center'>
					<IoIosDocument className='logo-icon'></IoIosDocument>
					<div className='circle-container'></div>
					<div className='logo-label'>Cv</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
