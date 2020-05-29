import useProfileState from './useProfileState.js';

export default function useCopyToClip() {
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
		window.alert(`Copied To Clipboard!`);
		textArea.remove();
	};

	return copyToClipBoard;
}
