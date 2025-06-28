import React from 'react';
import { Box, Text } from 'ink';
import { FactData } from '../types.js';

interface RandomFactProps {
	fact: FactData | null;
}

export const RandomFact: React.FC<RandomFactProps> = ({ fact }) => {
	return (
		<Box borderStyle="round" padding={2} margin={1} width={70}>
			<Box flexDirection="column">
				<Text color="cyan">🧠 RANDOM FACT</Text>
				<Text color="white">
					━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				</Text>
				{fact ? (
					<Text color="white">{fact.text}</Text>
				) : (
					<Text color="red">Loading fact...</Text>
				)}
			</Box>
		</Box>
	);
};
