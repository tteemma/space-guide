import { createStore } from 'effector'
import { defaultFilter, FilterAsteroid } from './type'
import { setAsteroidFilters } from './event'

export const $neoFilters = createStore<FilterAsteroid>(defaultFilter).on(
	setAsteroidFilters,
	(_, payload) => ({ ...defaultFilter, ...payload })
)
