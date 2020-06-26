import React, { useContext, useEffect } from 'react';

import './alerts.scss';
import { AlertContext } from '../../context/AlertContext';
import CloseBtn from '../view/buttons/CloseBtn';

export default function SuccessMsg({ msg, styles }) {
	const { hideAlert } = useContext(AlertContext);
	return (
		<div className={styles.container}>
			<div className={styles.success}>
				<span className={styles.msg}>{msg}</span>
				<CloseBtn
					event={hideAlert}
					styles={{ container: 'close-alert', icon: 'close-icon' }}
				/>
			</div>
		</div>
	);
}
