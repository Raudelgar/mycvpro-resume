import React, { useContext } from 'react';

import './footer.scss';
import { ThemeContext } from '../../context/Context.js';

export default function Footer() {
	const { theme } = useContext(ThemeContext);
	return (
		<footer className='footer-container'>
			<div className='footer-left'>
				<div className='copyright'>
					<span className={`${theme}-text`}>
						Copyright &#9400; 2020 MyCvPro Inc. All rights reserved.
					</span>
				</div>
				<div className='footer-nav'>
					<a href='#' className={`${theme}-footer-link`}>
						Privacy Policy
					</a>
					<span className={`${theme}-tab ${theme}-text`}>|</span>
					<a href='#' className={`${theme}-footer-link`}>
						About Us
					</a>
					<span className={`${theme}-tab ${theme}-text`}>|</span>
					<a href='#' className={`${theme}-footer-link`}>
						Contact Us
					</a>
					<span className={`${theme}-tab ${theme}-text`}>|</span>
					<a href='#' className={`${theme}-footer-link`}>
						Social Media
					</a>
				</div>
			</div>
			<div className='region'>
				<span className={`${theme}-lenguage ${theme}-text`}>en</span>
				<span className={`${theme}-tab ${theme}-text`}>|</span>
				<span className={`${theme}-country ${theme}-text`}>United State</span>
			</div>
		</footer>
	);
}
