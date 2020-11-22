import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegFilePdf } from 'react-icons/fa';
import TooltipLabel from 'components/tooltips/TooltipLabel';
import { ThemeContext } from 'context/ThemeContext';
import BarLoader from 'components/loaders/BarLoader';
import { getPdf } from 'redux/actions/pdfAction';
import './icons.scss';

export default function PdfComponent({ collapse = true }) {
	const { theme } = useContext(ThemeContext);
	const dispatch = useDispatch();
	const {
		profile,
		skills,
		pdfState: isDisable,
		experience,
		education,
		projects,
	} = useSelector((store) => store);

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
