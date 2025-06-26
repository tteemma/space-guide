'use client'
import { Store } from 'effector'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'

interface useSyncToLocalStorageProps<T> {
	$store: Store<T>
	data: string
}
export const useSyncToLocalStorage = <T, _>({
	$store,
	data,
}: useSyncToLocalStorageProps<T>) => {
	const toStore = useUnit($store)
	useEffect(() => {
		localStorage.setItem(data, JSON.stringify(toStore))
	}, [toStore, data])
}
