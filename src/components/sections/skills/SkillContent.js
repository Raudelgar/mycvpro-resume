import React from 'react';
import PropTypes from 'prop-types';
import 'components/sections/sections.scss';

export default function SkillContent({ content, theme }) {
	return (
		<div className={`${theme}-section-content`}>
			{content.map(({ contentId, label, values }) => (
				<div key={contentId} className='sub-section'>
					<span className='section-label'>{label}:</span>
					<span className='section-value'>{values.join(', ')}</span>
				</div>
			))}
		</div>
	);
}

SkillContent.propTypes = {
	content: PropTypes.array,
	theme: PropTypes.string.isRequired,
};
