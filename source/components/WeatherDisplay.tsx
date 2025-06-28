import React from 'react';
import { Box, Text } from 'ink';
import { WeatherData } from '../types.js';

interface WeatherDisplayProps {
	weather: WeatherData | null;
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
	return (
		<Box borderStyle="round" padding={2} margin={1} width={50}>
			<Box flexDirection="column">
				<Text color="magenta">🌤️ WEATHER</Text>
				<Text color="white">━━━━━━━━━━━━━━━</Text>
				{weather ? (
					<>
						<Text color="cyan">{weather.location}</Text>
						<Text color="yellow">
							{weather.temperature}°C - {weather.description}
						</Text>
						<Text color="green">Humidity: {weather.humidity}%</Text>
					</>
				) : (
					<Text color="red">Loading weather...</Text>
				)}
			</Box>
		</Box>
	);
};
