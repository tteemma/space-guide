import { Apod } from '@/entities/apod/model/type'
import { fetchApi } from '../lib/fetchApi'
export const fetchApod = async (): Promise<Apod | null> => {
	return await fetchApi<Apod>({
		unicUrl: '/planetary/apod',
		options: {
			cache: 'force-cache',
			next: {
				revalidate: 86400,
			},
		},
		// queryParams: {
		// 	date: `2005-09-24`,
		// },
	})
}
