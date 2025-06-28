import React from 'react';
import { Box, Text } from 'ink';

interface HeaderProps {
	name: string;
	currentTime: Date;
}

export const Header: React.FC<HeaderProps> = ({ name, currentTime }) => {
	return (
		<Box borderStyle="double" padding={1} marginBottom={1}>
			<Box flexDirection="column" width="100%">
				<Box justifyContent="center">
					<Text color="rainbow">🌟 REAL-TIME DATA DASHBOARD 🌟</Text>
				</Box>
				<Box justifyContent="center">
					<Text color="gray">
						Welcome, <Text color="green">{name}</Text>! |{' '}
						{currentTime.toLocaleTimeString()}
					</Text>
				</Box>
			</Box>
		</Box>
	);
};
