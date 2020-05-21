import { useSelector } from 'react-redux';
import { profileSelector } from './useSelectorHelper.js';

export default function useProfileState() {
	return useSelector(profileSelector);
}
