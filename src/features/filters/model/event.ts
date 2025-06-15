import { createEvent } from 'effector'
import { FilterAsteroid } from './type'

export const setAsteroidFilters = createEvent<FilterAsteroid>()
