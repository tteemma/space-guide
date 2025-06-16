import { MarsRoverPhotoResponse } from '@/entities/rover-photo/model/type'
import { fetchApi } from '../lib/fetchApi'

export const fetchReoverPhoto =
	async (): Promise<MarsRoverPhotoResponse | null> => {
		return await fetchApi<MarsRoverPhotoResponse>({
			unicUrl: '/mars-photos/api/v1/rovers/curiosity/photos',
			options: {
				next: {
					revalidate: 3600,
				},
			},
			queryParams: {
				sol: 30,
			},
		})
	}
