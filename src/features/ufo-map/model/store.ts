import { createStore, sample } from 'effector'
import { sightings, UfoSighting } from './type'
import { addUfoSighting } from './events'
import { addNewFieldInSelect } from '@/features/select-ufo/model'

export const $ufoMapCoords = createStore<UfoSighting[]>(sightings).on(
	addUfoSighting,
	(state, payload) => [...state, payload]
)

sample({
	clock: addNewFieldInSelect,
	target: addUfoSighting,
})
