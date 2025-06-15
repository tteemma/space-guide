import { createEvent } from 'effector'
import { NearEarthObject } from '../type'

export const allAsteroidsReceived = createEvent<NearEarthObject[]>()
