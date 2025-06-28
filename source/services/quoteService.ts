import { QuoteData } from '../types.js';

const fallbackQuotes: QuoteData[] = [
	{
		content: 'The only way to do great work is to love what you do.',
		author: 'Steve Jobs',
	},
	{
		content: 'Innovation distinguishes between a leader and a follower.',
		author: 'Steve Jobs',
	},
	{
		content: "Life is what happens to you while you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		content: 'The future belongs to those who believe in the beauty of their dreams.',
		author: 'Eleanor Roosevelt',
	},
];

export const fetchQuoteData = async (): Promise<QuoteData | null> => {
	try {
		const response = await fetch(
			'https://api.quotable.io/random?minLength=50&maxLength=150',
		);
		const data = await response.json();
		return { content: data.content, author: data.author };
	} catch (error) {
		const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
		return randomQuote || null;
	}
};
