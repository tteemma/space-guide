'use client'

import AddToFavoritesButton from '@/features/favorites/ui/AddToFavoritesButton'
import { NearEarthObject } from '../type'
import styles from './Asteroid.module.scss'
import cn from 'clsx'
import { toggleNEOFavorites } from '@/features/favorites/model/event'
import { useUnit } from 'effector-react'
import { $favoriteNEO } from '@/features/favorites/model/store'
import { NEO_SAVE } from '@/shared/type'
import { useSyncFavoritesToLocalStorage } from '@/features/favorites/lib/useSyncFavoritesToLocalStorage'
import { addSomeReward, POINT_REWARDS } from '@/entities/point'

interface AsteroidProps {
	asteroid: NearEarthObject
}

const Asteroid = ({ asteroid }: AsteroidProps) => {
	useSyncFavoritesToLocalStorage({ store: $favoriteNEO, data: NEO_SAVE })
	const favoriteNEO = useUnit($favoriteNEO)

	const inFavorites = favoriteNEO.some(neo => neo.id === asteroid.id)

	const diameter =
		asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)
	const velocity =
		asteroid.close_approach_data[0]?.relative_velocity.kilometers_per_hour
	const distance = asteroid.close_approach_data[0]?.miss_distance.kilometers

	return (
		<article
			className={cn(styles.card, {
				[styles.hazard]: asteroid.is_potentially_hazardous_asteroid,
				[styles.safe]: !asteroid.is_potentially_hazardous_asteroid,
			})}
		>
			<h3 className={styles.name}>{asteroid.name}</h3>
			<ul className={styles.info}>
				<li>
					<strong>Size:</strong> {diameter} km
				</li>
				<li>
					<strong>Velocity:</strong> {(+velocity).toFixed(0)} km/h
				</li>
				<li>
					<strong>Distance:</strong> {(+(distance ?? 0) / 1_000_000).toFixed(2)}{' '}
					million km
				</li>
				<li>
					<strong>Orbiting body:</strong>{' '}
					{asteroid.close_approach_data[0]?.orbiting_body}
				</li>
				<li>
					<strong>Hazardous:</strong>{' '}
					{asteroid.is_potentially_hazardous_asteroid ? '🟥 Yes' : '🟩 No'}
				</li>
			</ul>
			<AddToFavoritesButton
				inFavorites={inFavorites}
				className={cn(styles.favoriteButton, {
					[styles.active]: inFavorites,
				})}
				onClick={() => {
					toggleNEOFavorites(asteroid)
					if (!inFavorites) addSomeReward(POINT_REWARDS.add_asteroid)
				}}
			/>
		</article>
	)
}

export default Asteroid
