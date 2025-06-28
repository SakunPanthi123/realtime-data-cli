import { useState, useEffect } from 'react';
import { ISSData } from '../types.js';
import { fetchISSData } from '../services/issService.js';

export const useISSData = () => {
	const [issData, setIssData] = useState<ISSData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchISSData();
			if (data) {
				setIssData(data);
			}
		};

		fetchData();
		const interval = setInterval(fetchData, 5000); // Update every 5 seconds
		return () => clearInterval(interval);
	}, []);

	return issData;
};
