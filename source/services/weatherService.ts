import { WeatherData } from '../types.js';

export const fetchWeatherData = async (): Promise<WeatherData | null> => {
	try {
		// Using a fallback since API key is needed
		const fallbackWeather = {
			location: 'San Francisco',
			temperature: Math.floor(Math.random() * 20) + 10,
			description: ['Sunny', 'Cloudy', 'Rainy', 'Foggy'][
				Math.floor(Math.random() * 4)
			] as string,
			humidity: Math.floor(Math.random() * 40) + 30,
		};
		return fallbackWeather;
	} catch (error) {
		// Fallback weather data
		const fallbackWeather = {
			location: 'San Francisco',
			temperature: Math.floor(Math.random() * 20) + 10,
			description: ['Sunny', 'Cloudy', 'Rainy', 'Foggy'][
				Math.floor(Math.random() * 4)
			] as string,
			humidity: Math.floor(Math.random() * 40) + 30,
		};
		return fallbackWeather;
	}
};
