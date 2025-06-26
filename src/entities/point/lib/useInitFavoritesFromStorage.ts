import { useEffect } from 'react'

export const useInitFavoritesFromStorage = (
	event: (points: number) => void
) => {
	useEffect(() => {
		if (typeof window === null) return
		const saved = localStorage.getItem('points')
		if (saved) {
			try {
				const parsed = Number(saved)
				event(parsed)
			} catch (err) {
				event(0)
				console.error(err)
			}
		} else {
			event(0)
		}
	}, [])
}
