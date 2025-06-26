import { createStore } from 'effector'
import { SelectedType } from './type'
import { setSelect } from './events'

export const $selected = createStore<SelectedType | null>(null).on(
	setSelect,
	(_, payload) => payload
)
