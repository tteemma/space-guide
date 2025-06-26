import { createApi } from 'effector'
import { Mission } from '../type'
import { $mission } from './store'

export const { createMission } = createApi($mission, {
	createMission: (state, payload: Mission): Mission[] => [...state, payload],
})
