import { createStore } from 'effector'
import { Apod } from './type'
import { addNewApodFx } from './effect'
import { NearEarthObject } from '@/entities/asteroid/type'

export const $apods = createStore<Apod[]>([]).on(
	addNewApodFx.doneData,
	(state, payload) => (payload ? [...state, payload] : state)
)
