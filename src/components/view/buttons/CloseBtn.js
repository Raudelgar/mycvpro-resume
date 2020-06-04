import React from 'react';
import { IoMdClose } from 'react-icons/io';

import './buttons.scss';

export default function CloseBtn({ event, styles }) {
	const { container, icon } = styles;
	return (
		<div className={container} onClick={event}>
			<IoMdClose className={icon} />
		</div>
	);
}
