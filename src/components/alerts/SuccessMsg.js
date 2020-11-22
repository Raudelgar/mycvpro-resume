import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AlertContext } from 'context/AlertContext';
import CloseBtn from 'components/buttons/CloseBtn';
import './alerts.scss';

export default function SuccessMsg({ msg, styles }) {
	const { hideAlert } = useContext(AlertContext);
	return (
		<div className={styles.container}>
			<div className={styles.success}>
				<div className={styles.msg}>
					<span>{msg}</span>
				</div>
				<CloseBtn
					event={hideAlert}
					styles={{ container: 'close-alert', icon: 'close-icon' }}
				/>
			</div>
		</div>
	);
}

SuccessMsg.propTypes = {
	styles: PropTypes.object.isRequired,
	msg: PropTypes.string,
};
