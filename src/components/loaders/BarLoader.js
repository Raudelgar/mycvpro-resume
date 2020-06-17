import React from 'react';

import useLoaderState from '../../hooks/useLoaderState.js';
import './loaders.scss';

export default function BarLoader() {
	const isLoading = useLoaderState();

	if (isLoading.bool && isLoading.scope === 'pdf-btn') {
		return (
			<div className='bar-loader-container'>
				<div className='bar-loader-progress'></div>
			</div>
		);
	} else {
		return null;
	}
}
