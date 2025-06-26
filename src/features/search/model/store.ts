import { createStore } from 'effector'
import { AsteroidSearchParams, defaultParams } from './types'
import { setSearchParams } from './event'

export const $searchParams = createStore<AsteroidSearchParams>(
	defaultParams
).on(setSearchParams, (_, payload) => payload)

export const $searchParamsUpdated = setSearchParams
