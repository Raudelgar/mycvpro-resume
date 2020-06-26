import { useSelector } from 'react-redux';
import { pdfSelector } from './useSelectorHelper';

export default function usePdfDownload() {
	return useSelector(pdfSelector);
}
