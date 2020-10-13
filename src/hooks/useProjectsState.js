import { useSelector } from 'react-redux';
import { projectsSelector } from './useSelectorHelper.js';

export default function useProjectsState() {
	return useSelector(projectsSelector);
}
