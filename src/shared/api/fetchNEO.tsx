import { NeoFeedResponse } from '@/entities/asteroid/type'
import { API_KEY, DEFAULT_URL } from './type'

export const fetchNEO = async (): Promise<NeoFeedResponse | null> => {
	try {
		const neo = await fetch(
			`${DEFAULT_URL}/neo/rest/v1/feed?api_key=${API_KEY}`,
			{
				next: {
					revalidate: 3600,
				},
			}
		)
		if (!neo.ok) throw new Error('Pizdes error')
		const data = await neo.json()
		return data
	} catch (err) {
		console.error(err)
		return null
	}
}
