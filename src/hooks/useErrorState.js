import { useSelector } from 'react-redux';

import { errorSelector } from './useSelectorHelper.js';

export default function useErrorState() {
	return useSelector(errorSelector);
}
