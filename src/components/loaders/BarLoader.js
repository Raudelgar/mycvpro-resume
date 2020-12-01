import React from 'react';
import {useSelector} from 'react-redux';
import './loaders.scss';

export default function BarLoader() {
	const isLoading = useSelector(store => store.isLoading);

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
