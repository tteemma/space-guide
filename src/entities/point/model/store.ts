import { createStore } from 'effector'
import { addSomeReward, resetEvent, savePoints } from './event'

export const $points = createStore<number>(0)
	.on(addSomeReward, (state, payload) => state + payload)
	.on(savePoints, (_, payload) => payload)
	.reset(resetEvent)
