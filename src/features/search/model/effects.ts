import { createEffect } from 'effector'
import { AsteroidSearchParams } from './types'
import { fetchNEO } from '@/shared/api/fetchNEO'
import { NearEarthObject } from '@/entities/asteroid/type'

export const fetchAsteroidsByParamsFx = createEffect(
	async (params: AsteroidSearchParams): Promise<NearEarthObject[]> => {
		if (!params.date) return []

		const asteroidResponse = await fetchNEO({ start_date: params.date })

		if (!asteroidResponse) return []

		const allAsteroids: NearEarthObject[] = Object.values(
			asteroidResponse.near_earth_objects
		).flat()

		return allAsteroids.filter(asteroid => {
			const maxKm = params.maxDiameter ? params.maxDiameter / 1000 : undefined
			const minKm = params.minDiameter ? params.minDiameter / 1000 : undefined

			const diameter =
				asteroid.estimated_diameter.kilometers.estimated_diameter_max
			const isHazardous = asteroid.is_potentially_hazardous_asteroid

			if (params.onlyHazardous && !isHazardous) return false
			if (minKm && diameter < minKm) return false
			if (maxKm && diameter > maxKm) return false

			return true
		})
	}
)
