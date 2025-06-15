import { createStore } from 'effector'
import { Apod } from './type'
import { addNewApodFx } from './effect'

export const $apods = createStore<Apod[]>([]).on(
	addNewApodFx.doneData,
	(state, payload) => (payload ? [...state, payload] : state)
)
