import React from 'react';

import '../sections.scss';

export default function ExperienceContent({ content, theme }) {
	return (
		<div className={`${theme}-section-content`}>
			{content.map((obj) => (
				<div key={obj.contentId} className='sub-section'>
					<span className='section-label label-block'>{obj.title}</span>
					<span className='section-label label-block'>
						{obj.company}, {obj.location}
					</span>
					<span className='section-label label-block'>
						{obj.from} - {obj.current ? 'Present' : obj.to}
					</span>
					{obj.note ? (
						<span className='section-label label-block text-note'>
							{obj.note}
						</span>
					) : null}
					<span className='section-value'>
						{obj.description.map(({ taskId, task, subtasks }) => (
							<div key={taskId} className='section-desc'>
								<span className='section-value'>{task}</span>
								<div className='section-task'>
									{subtasks.map(({ subtaskId, subtask }) => (
										<div key={subtaskId}>
											<span className='section-value sub-task'>{subtask}</span>
										</div>
									))}
								</div>
							</div>
						))}
					</span>
					<div className={`${theme}-section-border`}></div>
				</div>
			))}
		</div>
	);
}
