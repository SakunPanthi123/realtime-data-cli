export interface Props {
	name: string | undefined;
}

export interface ISSData {
	latitude: number;
	longitude: number;
	timestamp: number;
}

export interface WeatherData {
	location: string;
	temperature: number;
	description: string;
	humidity: number;
}

export interface FactData {
	text: string;
}

export interface QuoteData {
	content: string;
	author: string;
}

export interface BitcoinData {
	price: number;
	change24h: number;
}
