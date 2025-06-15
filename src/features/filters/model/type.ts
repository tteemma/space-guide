export interface FilterAsteroid {
	onlyHazardous: boolean
	sortBy: 'name' | 'diameter' | 'distance'
}

export const defaultFilter: FilterAsteroid = {
	onlyHazardous: false,
	sortBy: 'name',
}
