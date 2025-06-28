import React from 'react';
import { Box, Text } from 'ink';

export const LoadingScreen: React.FC = () => {
	return (
		<Box
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			padding={2}
		>
			<Text color="cyan">🚀 Loading Real-Time Data Dashboard...</Text>
			<Text color="yellow">Fetching live data from around the world! 🌍</Text>
		</Box>
	);
};
