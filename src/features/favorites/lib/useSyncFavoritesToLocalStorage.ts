'use client'
import { Store } from 'effector'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'

interface Props<T> {
	store: Store<T>
	data: string
}

export const useSyncFavoritesToLocalStorage = <T, _>({
	store,
	data,
}: Props<T>) => {
	const favorite = useUnit(store)

	useEffect(() => {
		localStorage.setItem(data, JSON.stringify(favorite))
	}, [data, favorite])
}
