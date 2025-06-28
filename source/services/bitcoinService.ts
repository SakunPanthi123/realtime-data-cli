import { BitcoinData } from '../types.js';

export const fetchBitcoinData = async (): Promise<BitcoinData | null> => {
	try {
		const response = await fetch(
			'https://api.coindesk.com/v1/bpi/currentprice.json',
		);
		const data = await response.json();
		const price = parseFloat(data.bpi.USD.rate.replace(',', ''));
		return {
			price: price,
			change24h: (Math.random() - 0.5) * 1000, // Simulated change
		};
	} catch (error) {
		// Fallback Bitcoin data
		return {
			price: Math.floor(Math.random() * 10000) + 40000,
			change24h: (Math.random() - 0.5) * 1000,
		};
	}
};
