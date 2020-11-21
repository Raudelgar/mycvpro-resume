import React from 'react';

import 'components/sections/sections.scss';

export default function EducationContent({ content, theme }) {
	return (
		<div className={`${theme}-section-content`}>
			{content.map(({ contentId, college, location, degree, note }) => (
				<div key={contentId} className='sub-section'>
					<span className='section-label label-block'>{degree}</span>
					{note ? (
						<span className='section-label label-block text-note'>{note}</span>
					) : null}
					<span className='section-value'>{college}.</span>
					<span className='section-value'>{location}</span>
				</div>
			))}
		</div>
	);
}
