'use client'

import { allAsteroidsReceived } from '@/entities/asteroid/model/events'
import { NearEarthObject } from '@/entities/asteroid/type'
import Asteroid from '@/entities/asteroid/ui/Asteroid'
import { NEO_SAVE } from '@/shared/type'
import { $filteredAsteroids } from '@/features/filters/model/filtered'
import RenderProps from '@/shared/lib/RenderProps'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { useInitFavoritesFromStorage } from '@/features/favorites/lib/useInitFavoritesFromStorage'
import { saveFavoritesNEO } from '@/features/favorites/model/event'

interface AsteroidSummary {
	asteroids: NearEarthObject[]
}
const AsteroidSummary = ({ asteroids }: AsteroidSummary) => {
	useInitFavoritesFromStorage({
		event: saveFavoritesNEO,
		data: NEO_SAVE,
	})
	const filteredAsteroids = useUnit($filteredAsteroids)
	useEffect(() => {
		if (asteroids.length > 0) {
			allAsteroidsReceived(asteroids)
		}
	}, [asteroids])
	return (
		<RenderProps
			items={filteredAsteroids.slice(0, 5)}
			render={filteredAsteroids => (
				<Asteroid key={filteredAsteroids.id} asteroid={filteredAsteroids} />
			)}
		/>
	)
}

export default AsteroidSummary
