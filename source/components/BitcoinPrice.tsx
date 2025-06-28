import React from 'react';
import { Box, Text } from 'ink';
import { BitcoinData } from '../types.js';

interface BitcoinPriceProps {
	bitcoin: BitcoinData | null;
}

export const BitcoinPrice: React.FC<BitcoinPriceProps> = ({ bitcoin }) => {
	return (
		<Box borderStyle="round" padding={2} margin={1} width={50}>
			<Box flexDirection="column">
				<Text color="yellow">₿ BITCOIN PRICE</Text>
				<Text color="white">━━━━━━━━━━━━━━━</Text>
				{bitcoin ? (
					<>
						<Text color="yellow">${bitcoin.price.toLocaleString()}</Text>
						<Text color={bitcoin.change24h >= 0 ? 'green' : 'red'}>
							{bitcoin.change24h >= 0 ? '📈 +' : '📉 '}
							{bitcoin.change24h.toFixed(2)}
						</Text>
					</>
				) : (
					<Text color="red">Loading Bitcoin data...</Text>
				)}
			</Box>
		</Box>
	);
};
