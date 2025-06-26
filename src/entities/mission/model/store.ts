import { createStore } from 'effector'
import { Mission, missions } from '../type'

export const $mission = createStore<Mission[]>(missions)
