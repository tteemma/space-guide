import { API_KEY, DEFAULT_URL } from '../api/type'

interface FetchApiParams {
	unicUrl: string
	options?: RequestInit
	queryParams?: Record<string, string | number>
}

export const fetchApi = async <T>({
	unicUrl,
	options = {},
	queryParams = {},
}: FetchApiParams): Promise<T | null> => {
	try {
		const url = new URL(`${DEFAULT_URL}${unicUrl}`)

		url.searchParams.set('api_key', API_KEY)
		console.log(queryParams)
		console.log(url.searchParams)

		for (const [key, value] of Object.entries(queryParams)) {
			url.searchParams.set(key, value.toString())
		}

		const response = await fetch(url.toString(), options)
		if (!response.ok) throw new Error('❌Pizdes❌ ❌Error❌')
		return response.json()
	} catch (err) {
		console.error(err)
		return null
	}
}
