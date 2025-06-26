import { useEffect } from 'react'

interface Props<T> {
	event: (parsed: T[]) => void
	data: string
}

export const useInitFavoritesFromStorage = <T, _>({
	event,
	data,
}: Props<T>) => {
	useEffect(() => {
		if (typeof window === 'undefined') return

		const saved = localStorage.getItem(data)
		if (saved) {
			try {
				const parsed = JSON.parse(saved)
				event(parsed)
			} catch (err) {
				console.error('Error')
				event([])
			}
		} else {
			event([])
		}
	}, [])
}
