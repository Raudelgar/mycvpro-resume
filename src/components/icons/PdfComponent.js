import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaRegFilePdf } from 'react-icons/fa';
import TooltipLabel from '../tooltips/TooltipLabel';
import { ThemeContext } from '../../context/ThemeContext';
import { showLoader } from '../../actions/loaderAction';
import BarLoader from '../loaders/BarLoader';
import usePdfDownload from '../../hooks/usePdfDownload';

export default function PdfComponent({ collapse }) {
	const isDisable = usePdfDownload();
	const { theme } = useContext(ThemeContext);
	const dispatch = useDispatch();

	const handlePdfRequest = () => {
		// dispatch(showLoader('pdf-btn'));
	};

	// console.log(isDisable);

	return (
		<TooltipLabel label='Donwload PDF' collapse={collapse}>
			<div
				className={`${theme}-content-icon ${isDisable ? 'disable' : ''}`}
				onClick={handlePdfRequest}
			>
				<FaRegFilePdf size={25} className={`${theme}-icon`} />
			</div>
			{/* <BarLoader /> */}
		</TooltipLabel>
	);
}
