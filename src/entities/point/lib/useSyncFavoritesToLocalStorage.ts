'use client'
import { Store } from 'effector'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'

export const useSyncFavoritesToLocalStorage = (store: Store<number>) => {
	const points = useUnit(store)
	useEffect(() => {
		localStorage.setItem('points', JSON.stringify(points))
	}, [points])
}
