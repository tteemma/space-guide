'use client'

import { useInitFavoritesFromStorage } from '@/features/favorites/lib/useInitFavoritesFromStorage'
import { saveFavoritesApod } from '@/features/favorites/model/event'
import { APOD_SAVE } from '@/shared/type'

const InitFavoriteApod = () => {
	useInitFavoritesFromStorage({
		event: saveFavoritesApod,
		data: APOD_SAVE,
	})
	return null
}

export default InitFavoriteApod
