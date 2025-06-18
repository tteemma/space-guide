import { NeoFeedResponse } from '@/entities/asteroid/type'
import { fetchApi } from '../lib/fetchApi'

export const fetchNEO = async (
	queryParams?: Record<string, string | number>
): Promise<NeoFeedResponse | null> => {
	return await fetchApi<NeoFeedResponse>({
		unicUrl: '/neo/rest/v1/feed',
		options: {
			next: {
				revalidate: 3600,
			},
		},
		queryParams: queryParams,
	})
}
