import React from 'react';
import { Box, Text } from 'ink';
import { ISSData } from '../types.js';

interface ISSTrackerProps {
	issData: ISSData | null;
}

export const ISSTracker: React.FC<ISSTrackerProps> = ({ issData }) => {
	return (
		<Box borderStyle="round" padding={2} margin={1} width={50}>
			<Box flexDirection="column">
				<Text color="blue">🛰️ ISS LOCATION</Text>
				<Text color="white">━━━━━━━━━━━━━━━</Text>
				{issData ? (
					<>
						<Text color="cyan">
							Latitude:{' '}
							<Text color="yellow">{issData.latitude.toFixed(4)}°</Text>
						</Text>
						<Text color="cyan">
							Longitude:{' '}
							<Text color="yellow">{issData.longitude.toFixed(4)}°</Text>
						</Text>
						<Text color="green">🌍 Orbiting Earth right now!</Text>
					</>
				) : (
					<Text color="red">Loading ISS data...</Text>
				)}
			</Box>
		</Box>
	);
};
