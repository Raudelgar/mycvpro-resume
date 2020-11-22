import React from 'react';
import PropTypes from 'prop-types';
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

CloseBtn.propTypes = {
	event: PropTypes.func.isRequired,
	styles: PropTypes.object.isRequired,
};
