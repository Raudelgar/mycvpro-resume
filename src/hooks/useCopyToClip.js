import React, { useContext } from 'react';
import useProfileState from './useProfileState.js';
import { AlertContext } from '../context/AlertContext.js';
import SuccessMsg from '../components/alerts/SuccessMsg.js';

export default function useCopyToClip() {
	const { showAlert } = useContext(AlertContext);
	const { id, username } = useProfileState();

	const copyToClipBoard = () => {
		let params = {
			usr: window.encodeURIComponent(username),
			cvid: window.encodeURIComponent(id),
		};
		let textArea = window.document.createElement('textarea');
		textArea.textContent = `${window.location.origin}/?cvid=${params.cvid}&usr=${params.usr}&share=true`;

		window.document.body.appendChild(textArea);
		textArea.select();
		window.document.execCommand('copy');
		textArea.remove();
		showAlert(
			<SuccessMsg
				msg={'Copied To Clipboard!'}
				styles={{
					container: 'cp-alert-container',
					success: 'cp-success',
					msg: 'cp-alert-msg',
				}}
			/>
		);
	};

	return { copyToClipBoard };
}
