import { createStore } from 'effector'
import { NearEarthObject } from '../type'
import { allAsteroidsReceived } from './events'

export const $asteroids = createStore<NearEarthObject[]>([]).on(
	allAsteroidsReceived,
	(_, payload) => payload
)
