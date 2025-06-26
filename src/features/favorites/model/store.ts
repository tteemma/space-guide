import { Apod } from '@/entities/apod/model/type'
import { createStore } from 'effector'
import {
	saveFavoritesApod,
	saveFavoritesNEO,
	toggleApodFavorites,
	toggleNEOFavorites,
} from './event'
import { NearEarthObject } from '@/entities/asteroid/type'

export const $favoriteApods = createStore<Apod[]>([])
	.on(toggleApodFavorites, (state, payload) => {
		const apodExist = state.some(apod => apod.date === payload.date)
		const toRemove = state.filter(apod => apod.date !== payload.date)
		return apodExist ? toRemove : [...state, payload]
	})
	.on(saveFavoritesApod, (_, payload) => payload)

export const $favoriteNEO = createStore<NearEarthObject[]>([])
	.on(toggleNEOFavorites, (state, payload) => {
		const neoExist = state.some(neo => neo.id === payload.id)
		const toRemove = state.filter(neo => neo.id !== payload.id)
		return neoExist ? toRemove : [...state, payload]
	})
	.on(saveFavoritesNEO, (_, payload) => payload)
