import React from 'react';
import { MdMail, MdPhone } from 'react-icons/md';
import { GiMoebiusStar } from 'react-icons/gi';

import './pdfTemplate.scss';
import useProfileState from '../../../hooks/useProfileState';
import useSkillsState from '../../../hooks/useSkillsState';
import useExperienceState from '../../../hooks/useExperienceState';
import useEducationState from '../../../hooks/useEducationState';

export default function PdfTemplate() {
	const profile = useProfileState();
	const skills = useSkillsState();
	const experience = useExperienceState();
	const education = useEducationState();

	return (
		<div id='pdf' className='pdf-template'>
			<div className='pdf-header'>
				<div className='pdf-user-name'>{profile.name}</div>
				<div className='pdf-header-info'>
					<div className='pdf-info-user-email'>
						<MdMail />
						<span>{profile.email}</span>
					</div>
					<GiMoebiusStar />
					<div className='pdf-info-user-phone'>
						<MdPhone />
						<span>{profile.phone}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

/* 
Mail icon
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
*/
