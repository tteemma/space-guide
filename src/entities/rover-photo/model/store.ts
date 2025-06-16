import { createStore } from 'effector'
import { MarsRoverPhoto, MarsRoverPhotoResponse } from './type'
import { addNewRoverPhotos } from './event'

// export const testEffectLoad = createEffect(async () => {
// 	return await fetchApi<MarsRoverPhotoResponse>({
// 		unicUrl: '/mars-photos/api/v1/rovers/curiosity/photos',
// 		options: {
// 			next: {
// 				revalidate: 3600,
// 			},
// 		},
// 		queryParams: {
// 			sol: 400,
// 		},
// 	})
// })

export const $roverPhotos = createStore<MarsRoverPhoto[]>([]).on(
	addNewRoverPhotos,
	(_, payload) => payload
)
// 	.on(testEffectLoad.doneData, (state, payload) => {
// 		if (!payload || !payload.photos) return state

// 		const newPhotos = payload.photos.filter(
// 			phot => !state.some(p => p.id === phot.id)
// 		)

// 		return [...state, ...newPhotos]
// 	})

// $roverPhotos.watch(data => console.log(data))
