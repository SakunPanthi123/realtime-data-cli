import React from 'react';
import { Box, Text } from 'ink';
import { QuoteData } from '../types.js';

interface InspirationQuoteProps {
	quote: QuoteData | null;
}

export const InspirationQuote: React.FC<InspirationQuoteProps> = ({ quote }) => {
	return (
		<Box borderStyle="round" padding={2} margin={1} width={70}>
			<Box flexDirection="column">
				<Text color="magenta">💭 INSPIRATION</Text>
				<Text color="white">
					━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				</Text>
				{quote ? (
					<>
						<Text color="white">"{quote.content}"</Text>
						<Text color="yellow">— {quote.author}</Text>
					</>
				) : (
					<Text color="red">Loading quote...</Text>
				)}
			</Box>
		</Box>
	);
};
