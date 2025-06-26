export interface SelectedType {
	label: string
	coords: [number, number]
	zoom: number
}

export const locations: SelectedType[] = [
	{ label: '👽 San Francisco UFO', coords: [37.7749, -122.4194], zoom: 18 },
	{ label: '🛸 London Sighting', coords: [51.5074, -0.1278], zoom: 18 },
	{ label: '🛸 Moscow UFO', coords: [55.7558, 37.6176], zoom: 18 },
	{ label: '🛸 Area 51 Sighting', coords: [37.235, -115.8111], zoom: 18 },
	{ label: '👾 Roswell UFO Crash', coords: [33.3943, -104.523], zoom: 18 },
	{ label: '🛸 Nazca Lines', coords: [-14.739, -75.13], zoom: 18 },
	{ label: '👽 Tunguska Event', coords: [60.885, 101.894], zoom: 18 },
	{ label: '🛸 Rendlesham Forest', coords: [52.093, 1.433], zoom: 18 },
	{ label: '👾 Phoenix Lights', coords: [33.4484, -112.074], zoom: 18 },
	{ label: '🛸 Kecksburg Incident', coords: [40.184, -79.46], zoom: 18 },
]
