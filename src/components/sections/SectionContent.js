import React from 'react';

import './sections.scss';

const filterRender = (content, theme, section) => {
	switch (section) {
		case 'SK':
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
		case 'EXP':
			return (
				<div className={`${theme}-section-content`}>
					{content.map((obj) => (
						<div key={obj.contentId} className='sub-section'>
							<span className='section-label label-block'>{obj.title}</span>
							<span className='section-label label-block'>
								{obj.from} - {obj.current ? 'Present' : obj.to}
							</span>
							<span className='section-label label-block'>
								{obj.company}, {obj.location}
							</span>
							{obj.note ? (
								<span className='section-label label-block'>{obj.note}</span>
							) : null}
							<span className='section-value'>
								{obj.description.map(({ taskId, task, subtasks }) => (
									<div key={taskId}>
										<span className='section-value'>{task}</span>
										{subtasks.map(({ subtaskId, subtask }) => (
											<div key={subtaskId}>
												<span className='section-value'>{subtask}</span>
											</div>
										))}
									</div>
								))}
							</span>
						</div>
					))}
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
