import { combine } from 'effector'
import { $favoriteNEO } from './store'
import { $neoFilters } from '@/features/filters/model/store'
import { NearEarthObject } from '@/entities/asteroid/type'

export const $filteredFavoriteNEO = combine(
	{
		favoriteNEO: $favoriteNEO,
		filter: $neoFilters,
	},
	({ favoriteNEO, filter }): NearEarthObject[] => {
		let result = [...favoriteNEO]

		if (filter.onlyHazardous)
			result = favoriteNEO.filter(neo => neo.is_potentially_hazardous_asteroid)

		switch (filter.sortBy) {
			case 'name':
				result.sort((a, b) => a.name.localeCompare(b.name))
				break
			case 'diameter':
				result.sort(
					(a, b) =>
						a.estimated_diameter.kilometers.estimated_diameter_max -
						b.estimated_diameter.kilometers.estimated_diameter_max
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
