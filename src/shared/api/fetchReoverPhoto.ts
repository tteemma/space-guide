import { MarsRoverPhoto } from '@/entities/rover-photo/model/type'
import { fetchApi } from '../lib/fetchApi'

export const fetchReoverPhoto = async (
	missionType: string
): Promise<MarsRoverPhoto[] | null> => {
	return await fetchApi<MarsRoverPhoto[]>({
		unicUrl: `/mars-photos/api/v1/rovers/${missionType.toLowerCase()}/photos`,
		options: {
			next: {
				revalidate: 3600,
			},
		},
		queryParams: {
			sol: 1000,
		},
	})
}
