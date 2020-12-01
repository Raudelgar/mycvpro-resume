import React from 'react';
import PropTypes from 'prop-types';
import 'components/sections/sections.scss';

export default function ProjectsContent({ content, theme }) {
	return (
		<div className={`${theme}-section-content`}>
			{content.map(({ contentId, name, description, anchor, link, note }) => (
				<div key={contentId} className='sub-section'>
					<span className='section-label label-block'>{name}</span>
					<span className='section-value'>{description}</span>
					{note ? (
						<span className='section-label label-block text-note'>{note}</span>
					) : null}
					<a href={link} target='_blank' rel='noopener noreferrer'>
						{anchor}
					</a>
				</div>
			))}
		</div>
	);
}

ProjectsContent.propTypes = {
	content: PropTypes.array,
	theme: PropTypes.string.isRequired,
};
