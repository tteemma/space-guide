import { createEvent } from 'effector'
import { MarsRoverPhoto } from './type'

export const addNewRoverPhotos = createEvent<MarsRoverPhoto[]>()
