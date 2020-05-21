import React from 'react';

import './loaders.scss';
import { IoIosDocument } from 'react-icons/io';
import useLogoLoaderState from '../../hooks/useLogoLoaderState.js';

const filterRender = (isLoading) => {
	if (!isLoading) {
		return null;
	} else {
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
};

export default function LogoLoader() {
	const isLoading = useLogoLoaderState();
	return filterRender(isLoading);
}
