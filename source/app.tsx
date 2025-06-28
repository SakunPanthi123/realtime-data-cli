import React, { useState, useEffect } from 'react';
import { Box } from 'ink';
import { Props } from './types.js';
import { useCurrentTime } from './hooks/useCurrentTime.js';
import { useISSData } from './hooks/useISSData.js';
import { useWeatherData } from './hooks/useWeatherData.js';
import { useFactData } from './hooks/useFactData.js';
import { useQuoteData } from './hooks/useQuoteData.js';
import { useBitcoinData } from './hooks/useBitcoinData.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { LoadingScreen } from './components/LoadingScreen.js';
import { ISSTracker } from './components/ISSTracker.js';
import { WeatherDisplay } from './components/WeatherDisplay.js';
import { BitcoinPrice } from './components/BitcoinPrice.js';
import { RandomFact } from './components/RandomFact.js';
import { InspirationQuote } from './components/InspirationQuote.js';

export default function App({name = 'Stranger'}: Props) {
	const [loading, setLoading] = useState(true);
	const currentTime = useCurrentTime();
	const issData = useISSData();
	const weather = useWeatherData();
	const fact = useFactData();
	const quote = useQuoteData();
	const bitcoin = useBitcoinData();

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <LoadingScreen />;
	}

	return (
		<Box flexDirection="column" padding={1}>
			<Header name={name} currentTime={currentTime} />

			{/* Main Dashboard */}
			<Box flexDirection="row" flexWrap="wrap">
				<ISSTracker issData={issData} />
				<WeatherDisplay weather={weather} />
				<BitcoinPrice bitcoin={bitcoin} />
				<RandomFact fact={fact} />
				<InspirationQuote quote={quote} />
			</Box>

			<Footer />
		</Box>
	);
}
