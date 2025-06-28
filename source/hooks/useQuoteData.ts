import { useState, useEffect } from 'react';
import { QuoteData } from '../types.js';
import { fetchQuoteData } from '../services/quoteService.js';

export const useQuoteData = () => {
	const [quote, setQuote] = useState<QuoteData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchQuoteData();
			if (data) {
				setQuote(data);
			}
		};

		fetchData();
		const interval = setInterval(fetchData, 45000); // Update every 45 seconds
		return () => clearInterval(interval);
	}, []);

	return quote;
};
