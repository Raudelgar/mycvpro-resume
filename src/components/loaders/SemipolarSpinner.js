import React from 'react';

import './loaders.scss';

export default function SemipolarSpinner() {
	const generateRings = () =>
		Array.from({ length: 5 }).map((ring, i) => (
			<div key={i} className='ring' />
		));

	return (
		<div className='bg-loader bg-loader-opc '>
			<div className='semipolar-spinner loader-center'>{generateRings()}</div>
		</div>
	);
}
