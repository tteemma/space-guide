import { combine } from 'effector'
import { $asteroids } from '@/entities/asteroid/model/store'
import { $neoFilters } from './store'
import { NearEarthObject } from '@/entities/asteroid/type'

export const $filteredAsteroids = combine(
	{ asteroids: $asteroids, filters: $neoFilters },
	({ asteroids, filters }): NearEarthObject[] => {
		let result = [...asteroids]

		if (filters.onlyHazardous) {
			result = result.filter(a => a.is_potentially_hazardous_asteroid)
		}

		switch (filters.sortBy) {
			case 'name':
				result.sort((a, b) => a.name.localeCompare(b.name))
				break
			case 'diameter':
				result.sort(
					(a, b) =>
						b.estimated_diameter.kilometers.estimated_diameter_max -
						a.estimated_diameter.kilometers.estimated_diameter_max
				)
				break
			case 'distance':
				result.sort((a, b) => {
					const distA = parseFloat(
						a.close_approach_data[0]?.miss_distance.kilometers ?? '0'
					)
					const distB = parseFloat(
						b.close_approach_data[0]?.miss_distance.kilometers ?? '0'
					)
					return distA - distB
				})
				break
		}

		return result
	}
)
