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
						<ul>
							{obj.description.map(({ taskId, task, subtasks }) => (
								<div key={taskId} className='section-desc'>
									<li>
										<span className='section-value task'>{task}</span>
									</li>
									<div className='section-task'>
										<ul>
											{subtasks.map(({ subtaskId, subtask }) => (
												<li key={subtaskId}>
													<span className='section-value sub-task'>
														{subtask}
													</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</ul>
					</span>
					<div className={`${theme}-section-border`}></div>
				</div>
			))}
		</div>
	);
}
