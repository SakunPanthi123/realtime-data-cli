import { ISSData } from '../types.js';

export const fetchISSData = async (): Promise<ISSData | null> => {
	try {
		const response = await fetch('http://api.open-notify.org/iss-now.json');
		const data = await response.json();
		if (data.iss_position) {
			return {
				latitude: parseFloat(data.iss_position.latitude),
				longitude: parseFloat(data.iss_position.longitude),
				timestamp: data.timestamp,
			};
		}
		return null;
	} catch (error) {
		console.error('Failed to fetch ISS data:', error);
		return null;
	}
};
