import { useSelector } from 'react-redux';
import { experienceSelector } from './useSelectorHelper.js';

export default function useExperienceState() {
	return useSelector(experienceSelector);
}
