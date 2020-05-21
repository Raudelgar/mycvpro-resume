import { useSelector } from 'react-redux';
import { educationSelector } from './useSelectorHelper.js';

export default function useEducationState() {
	return useSelector(educationSelector);
}
