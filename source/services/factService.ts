import { FactData } from '../types.js';

export const fetchFactData = async (): Promise<FactData | null> => {
	try {
		const response = await fetch(
			'https://uselessfacts.jsph.pl/random.json?language=en',
		);
		const data = await response.json();
		return { text: data.text };
	} catch (error) {
		console.error('Failed to fetch fact:', error);
		return null;
	}
};
