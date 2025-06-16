export interface FilterAsteroid {
	onlyHazardous: boolean
	sortBy: 'name' | 'diameter' | 'distance'
}

export const defaultFilter: FilterAsteroid = {
	onlyHazardous: false,
	sortBy: 'name',
}

export const sortOptions: FilterAsteroid['sortBy'][] = [
	'name',
	'diameter',
	'distance',
]
