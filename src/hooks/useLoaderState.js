import { useSelector, shallowEqual } from 'react-redux';

import { loaderSelector } from './useSelectorHelper.js';

export default function useLoaderState() {
	return useSelector(loaderSelector);
}
