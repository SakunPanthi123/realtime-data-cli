import { useState, useEffect } from 'react';
import { WeatherData } from '../types.js';
import { fetchWeatherData } from '../services/weatherService.js';

export const useWeatherData = () => {
	const [weather, setWeather] = useState<WeatherData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchWeatherData();
			if (data) {
				setWeather(data);
			}
		};

		fetchData();
		const interval = setInterval(fetchData, 60000); // Update every minute
		return () => clearInterval(interval);
	}, []);

	return weather;
};
