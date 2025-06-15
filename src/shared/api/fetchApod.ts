import { Apod } from '@/entities/apod/model/type'
import { API_KEY } from '@/shared/api/type'
export const fetchApod = async (): Promise<Apod | null> => {
	try {
		const resp = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
		)
		if (!resp.ok) throw new Error('Pizdes error')
		return resp.json()
	} catch (err) {
		console.error(err)
		return null
	}
}
