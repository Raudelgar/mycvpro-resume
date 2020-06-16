import React, { useContext } from 'react';
import useProfileState from './useProfileState.js';
import { AlertContext } from '../context/AlertContext.js';
import SuccessMsg from '../components/alerts/SuccessMsg.js';

export default function usePdfDownload() {
	const downLoadPdf = () => console.log('Download PDF');
	return { downLoadPdf };
}
