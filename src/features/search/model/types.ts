export interface AsteroidSearchParams {
	date: string // YYYY-MM-DD
	minDiameter?: number
	maxDiameter?: number
	onlyHazardous?: boolean
}

export const defaultParams = {
	date: new Date().toISOString().split('T')[0],
	onlyHazardous: false,
}
