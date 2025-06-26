'use client'

import style from './PointsCounter.module.scss'
import { useUnit } from 'effector-react'
import { $points } from '../model/store'
import { useSyncFavoritesToLocalStorage } from '../lib/useSyncFavoritesToLocalStorage'
import { useInitFavoritesFromStorage } from '../lib/useInitFavoritesFromStorage'
import { savePoints } from '..'
const PointsCounter = () => {
	useInitFavoritesFromStorage(savePoints)
	const points = useUnit($points)
	useSyncFavoritesToLocalStorage($points)
	return <div className={style.point}>🔮 Your points: {points}</div>
}

export default PointsCounter
