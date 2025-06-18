import { createStore } from 'effector'
import { MarsRoverPhoto, MarsRoverPhotoResponse } from './type'
import { addNewRoverPhotos } from './event'

export const $roverPhotos = createStore<MarsRoverPhoto[]>([]).on(
	addNewRoverPhotos,
	(_, payload) => payload
)
