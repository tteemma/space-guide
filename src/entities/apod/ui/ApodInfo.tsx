'use client'
import AddToFavoritesButton from '@/features/favorites/ui/AddToFavoritesButton'
import { Apod } from '../model/type'
import styles from './ApodInfo.module.scss'

import { useUnit } from 'effector-react'
import { $favoriteApods } from '@/features/favorites/model/store'
import { toggleApodFavorites } from '@/features/favorites/model/event'
import { APOD_SAVE } from '@/shared/type'
import { useSyncFavoritesToLocalStorage } from '@/features/favorites/lib/useSyncFavoritesToLocalStorage'
import { addSomeReward, POINT_REWARDS } from '@/entities/point'

interface ApodInfoProps {
	apod: Apod
}

const ApodInfo = ({ apod }: ApodInfoProps) => {
	useSyncFavoritesToLocalStorage({ store: $favoriteApods, data: APOD_SAVE })
	const favoriteApods = useUnit($favoriteApods)
	const alreadyInFavorites = favoriteApods.some(item => item.date === apod.date)

	return (
		<article className={styles.card}>
			<h2 className={styles.title}>{apod.title}</h2>
			<p className={styles.date}>{apod.date}</p>

			{apod.media_type === 'image' ? (
				<img
					src={apod.hdurl ?? apod.url}
					alt={apod.title}
					className={styles.image}
				/>
			) : (
				<iframe
					src={apod.url}
					title={apod.title}
					className={styles.video}
					allowFullScreen
				/>
			)}

			<p className={styles.explanation}>{apod.explanation}</p>

			{apod.copyright && <p className={styles.copyright}>© {apod.copyright}</p>}
			<AddToFavoritesButton
				className={styles.favoriteButton}
				inFavorites={alreadyInFavorites}
				onClick={() => {
					toggleApodFavorites(apod)
					if (!alreadyInFavorites) addSomeReward(POINT_REWARDS.add_apod)
				}}
			/>
		</article>
	)
}

export default ApodInfo
