import { NearEarthObject } from '@/entities/asteroid/type'
import { createStore, sample } from 'effector'
import { fetchAsteroidsByParamsFx } from './effects'
import { $searchParams } from './store'
import { setSearchParams } from './event'

export const $searchResult = createStore<NearEarthObject[]>([]).on(
	fetchAsteroidsByParamsFx.doneData,
	(_, payload) => payload
)

sample({
	clock: setSearchParams,
	source: $searchParams,
	target: fetchAsteroidsByParamsFx,
})
