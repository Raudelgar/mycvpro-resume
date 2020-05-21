import { useSelector } from 'react-redux';

import { logoLoaderSelector } from './useSelectorHelper.js';

export default function useLogoLoaderState() {
	return useSelector(logoLoaderSelector);
}
