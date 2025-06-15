'use client'

import { allAsteroidsReceived } from '@/entities/asteroid/model/events'
import { NearEarthObject } from '@/entities/asteroid/type'
import Asteroid from '@/entities/asteroid/ui/Asteroid'
import { $filteredAsteroids } from '@/features/filters/model/filtered'
import RenderProps from '@/shared/lib/RenderProps'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'

interface AsteroidSummary {
	asteroids: NearEarthObject[]
}
const AsteroidSummary = ({ asteroids }: AsteroidSummary) => {
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
