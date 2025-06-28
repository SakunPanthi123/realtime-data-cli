import React from 'react';
import { Box, Text } from 'ink';

export const Footer: React.FC = () => {
	return (
		<Box borderStyle="single" padding={1} marginTop={1}>
			<Text color="gray">
				🔄 Data updates automatically | Made with ❤️ and Ink | Press Ctrl+C to
				exit
			</Text>
		</Box>
	);
};
