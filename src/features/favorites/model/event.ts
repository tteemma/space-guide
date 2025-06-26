import { Apod } from '@/entities/apod/model/type'
import { NearEarthObject } from '@/entities/asteroid/type'
import { createEvent } from 'effector'

export const toggleApodFavorites = createEvent<Apod>()
export const toggleNEOFavorites = createEvent<NearEarthObject>()

export const saveFavoritesNEO = createEvent<NearEarthObject[]>()
export const saveFavoritesApod = createEvent<Apod[]>()
