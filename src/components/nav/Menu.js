import React, { useState, useEffect, useContext } from 'react';
import { IoIosMenu, IoIosArrowUp } from 'react-icons/io';
import Icons from './Icons.js';
import ThemeContext from '../../context/ThemeContext.js';

export default function Menu() {
	const [isToggle, setToggle] = useState(false);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		function handleResize() {
			setToggle(false);
		}
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	});

	const handleMenu = () => {
		setToggle(!isToggle);
	};

	return (
		<>
			<div className='menu'>
				<Icons />
			</div>
			<button
				className={`${theme}-collapse-menu`}
				onClick={handleMenu}
				onBlur={() => setToggle(false)}
			>
				{!isToggle ? (
					<IoIosMenu size={30} />
				) : (
					<>
						<IoIosArrowUp size={30} />
						<div className={`${theme}-collapse-icons`}>
							<Icons collapse={true} />
						</div>
					</>
				)}
			</button>
		</>
	);
}
