import { useState, useEffect } from 'react';
import { FactData } from '../types.js';
import { fetchFactData } from '../services/factService.js';

export const useFactData = () => {
	const [fact, setFact] = useState<FactData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchFactData();
			if (data) {
				setFact(data);
			}
		};

		fetchData();
		const interval = setInterval(fetchData, 30000); // Update every 30 seconds
		return () => clearInterval(interval);
	}, []);

	return fact;
};
