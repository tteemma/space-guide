import { createStore } from 'effector'
import { locations, SelectedType } from '.'
import { addNewFieldInSelect, saveSelect } from './events'

export const $locations = createStore<SelectedType[]>(locations)
	.on(addNewFieldInSelect, (state, payload) => [
		...state,
		{
			label: payload.title,
			coords: [payload.lat, payload.lng],
			zoom: 18,
		},
	])
	.on(saveSelect, (_, payload) => payload)
