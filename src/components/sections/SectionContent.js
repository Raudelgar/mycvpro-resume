import React from 'react';

import './sections.scss';

export default function SectionContent({ content, theme }) {
	console.log(content);
	return (
		<div className={`${theme}-section-content`}>
			<ul>
				{content.map(({ label, values }) => (
					<li key={label}>
						<span>{label}:</span>
						<span>{values}</span>
					</li>
				))}
			</ul>
			{/* {JSON.stringify(content, null, 2)} */}
		</div>
	);
}
