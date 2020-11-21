import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { FaRegFilePdf } from 'react-icons/fa';
import TooltipLabel from 'components/tooltips/TooltipLabel';
import { ThemeContext } from 'context/ThemeContext';
import BarLoader from 'components/loaders/BarLoader';
import usePdfDownload from 'hooks/usePdfDownload';
import { getPdf } from 'redux/actions/pdfAction';
import useProfileState from 'hooks/useProfileState';
import useSkillsState from 'hooks/useSkillsState';
import useExperienceState from 'hooks/useExperienceState';
import useEducationState from 'hooks/useEducationState';
import useProjectsState from 'hooks/useProjectsState';

export default function PdfComponent({ collapse }) {
	const isDisable = usePdfDownload();
	const { theme } = useContext(ThemeContext);
	const dispatch = useDispatch();
	const profile = useProfileState();
	const skills = useSkillsState();
	const experience = useExperienceState();
	const education = useEducationState();
	const projects = useProjectsState();

	const handlePdfRequest = () => {
		if (!isDisable) {
			dispatch(getPdf(profile, skills, experience, education, projects));
		}
	};

	return (
		<TooltipLabel label='Donwload PDF' collapse={collapse}>
			<div
				className={`${theme}-content-icon ${isDisable ? 'disable' : ''}`}
				onClick={handlePdfRequest}
			>
				<FaRegFilePdf size={25} className={`${theme}-icon`} />
			</div>
			<BarLoader />
		</TooltipLabel>
	);
}
