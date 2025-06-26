import L from 'leaflet'

export interface UfoSighting {
	id: number
	lat: number
	lng: number
	title: string
}
export const sightings: UfoSighting[] = [
	{ id: 1, lat: 37.7749, lng: -122.4194, title: '👽 San Francisco UFO' },
	{ id: 2, lat: 51.5074, lng: -0.1278, title: '🛸 London Sighting' },
	{ id: 3, lat: 55.7558, lng: 37.6176, title: '🛸 Москва НЛО' },
	{ id: 4, lat: 37.235, lng: -115.8111, title: '🛸 Area 51 Sighting' },
	{ id: 5, lat: 33.3943, lng: -104.523, title: '👾 Roswell UFO Crash' },
	{ id: 6, lat: -14.739, lng: -75.13, title: '🛸 Nazca Lines' },
	{ id: 7, lat: 60.885, lng: 101.894, title: '👽 Tunguska Event' },
	{ id: 8, lat: 52.093, lng: 1.433, title: '🛸 Rendlesham Forest' },
	{ id: 9, lat: 33.4484, lng: -112.074, title: '👾 Phoenix Lights' },
	{ id: 10, lat: 40.184, lng: -79.46, title: '🛸 Kecksburg Incident' },
]

export const emptyIcon = L.divIcon({
	iconSize: [20, 20],
	html: '',
	className: 'custom-empty-icon',
})
