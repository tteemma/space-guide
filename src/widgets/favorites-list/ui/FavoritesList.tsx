'use client'

import ApodInfo from '@/entities/apod/ui/ApodInfo'
import Asteroid from '@/entities/asteroid/ui/Asteroid'
import { useInitFavoritesFromStorage } from '@/features/favorites/lib/useInitFavoritesFromStorage'
import { $filteredFavoriteNEO } from '@/features/favorites/model/filtered'
import { $favoriteApods } from '@/features/favorites/model/store'
import { APOD_SAVE, NEO_SAVE } from '@/shared/type'
import FilterPanel from '@/features/filters/ui/FilterPanel'
import RenderProps from '@/shared/lib/RenderProps'
import { useUnit } from 'effector-react'
import {
	saveFavoritesApod,
	saveFavoritesNEO,
} from '@/features/favorites/model/event'
import styles from './FavoritesList.module.scss'

const FavoritesList = () => {
	const { favoriteNEO, favoriteApods } = useUnit({
		favoriteNEO: $filteredFavoriteNEO,
		favoriteApods: $favoriteApods,
	})

	useInitFavoritesFromStorage({
		event: saveFavoritesNEO,
		data: NEO_SAVE,
	})
	useInitFavoritesFromStorage({
		event: saveFavoritesApod,
		data: APOD_SAVE,
	})

	return (
		<main>
			<section className={styles.favoritesSection}>
				<h2 className={styles.favoritesTitle}>🌠 APOD</h2>
				<div className={styles.favoritesGridApod}>
					<RenderProps
						items={favoriteApods}
						render={apod => <ApodInfo key={apod.date} apod={apod} />}
					/>
				</div>
			</section>
			<section className={styles.favoritesSection}>
				<h2 className={styles.favoritesTitle}>☄️ Near Earth Objects</h2>
				<FilterPanel />
				<div className={styles.favoritesGridNEO}>
					<RenderProps
						items={favoriteNEO}
						render={neo => <Asteroid key={neo.id} asteroid={neo} />}
					/>
				</div>
			</section>
		</main>
	)
}

export default FavoritesList
