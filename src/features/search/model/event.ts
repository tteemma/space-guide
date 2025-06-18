import { createEvent } from 'effector'
import { AsteroidSearchParams } from './types'

export const setSearchParams = createEvent<AsteroidSearchParams>()
