import { useSelector } from 'react-redux';
import { skillsSelector } from './useSelectorHelper.js';

export default function useSkillsState() {
	return useSelector(skillsSelector);
}
