import { useState, useEffect } from 'react';
import { BitcoinData } from '../types.js';
import { fetchBitcoinData } from '../services/bitcoinService.js';

export const useBitcoinData = () => {
	const [bitcoin, setBitcoin] = useState<BitcoinData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchBitcoinData();
			if (data) {
				setBitcoin(data);
			}
		};

		fetchData();
		const interval = setInterval(fetchData, 30000); // Update every 30 seconds
		return () => clearInterval(interval);
	}, []);

	return bitcoin;
};
