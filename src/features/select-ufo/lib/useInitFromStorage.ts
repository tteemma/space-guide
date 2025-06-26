import { useEffect } from 'react'

interface useInitFromStorageProps<T> {
	event: (event: T[]) => void
	data: string
}

export const useInitFromStorage = <T, _>({
	event,
	data,
}: useInitFromStorageProps<T>) => {
	useEffect(() => {
		if (typeof window === 'undefined') return

		const saved = localStorage.getItem(data)
		if (saved) {
			try {
				const parse = JSON.parse(saved)
				event(parse)
			} catch (err) {
				console.error(err)
				event([])
			}
		}
	}, [])
}
