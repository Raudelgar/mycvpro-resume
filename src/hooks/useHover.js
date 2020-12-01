import { useState, useEffect } from 'react';

export default function useHover() {
	const [isHover, setHover] = useState(false);
	const [show, setSHow] = useState(true);

	useEffect(() => {
		setSHow(false);
	}, [isHover]);

	const onMouseOver = () => {
		if (show) {
			setHover(true);
		}

		setHover(true);
	};

	const onMouseOut = () => setHover(false);

	return [isHover, { onMouseOut, onMouseOver }];
}
