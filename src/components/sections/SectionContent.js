import React from 'react';

import './sections.scss';

const filterRender = (content, theme, section) => {
	switch (section) {
		case 'SK':
			return (
				<div className={`${theme}-section-content`}>
					<ul>
						{content.map(({ label, values }) => (
							<li key={label}>
								<span className='section-label'>{label}:</span>
								<span className='section-value'>{values.join(', ')}</span>
							</li>
						))}
					</ul>
					{/* {JSON.stringify(content, null, 2)} */}
				</div>
			);
		default:
			return null;
	}
};

export default function SectionContent({ content, theme, section }) {
	console.log(content);
	return filterRender(content, theme, section);
}
