import React, { useContext } from 'react';

import './alerts.scss';
import { AlertContext } from 'context/AlertContext';
import CloseBtn from 'components/buttons/CloseBtn';

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
