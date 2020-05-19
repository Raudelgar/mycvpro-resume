import React from 'react';

import './footer.scss';

export default function Footer() {
	return (
		<footer className='footer-container'>
			<div className='footer-left'>
				<div className='copyright'>
					<span>Copyright &#9400; 2020 MyCvPro LLC. All rights reserved.</span>
				</div>
				<div className='footer-nav'>
					<a href='#'>Privacy Policy</a>
					<span className='tab'>|</span>
					<a href='#'>About Us</a>
					<span className='tab'>|</span>
					<a href='#'>Contact Us</a>
					<span className='tab'>|</span>
					<a href='#'>Social Media</a>
				</div>
			</div>
			<div className='region'>
				<span className='lenguage'>en</span>
				<span className='tab'>|</span>
				<span className='country'>United State</span>
			</div>
		</footer>
	);
}
