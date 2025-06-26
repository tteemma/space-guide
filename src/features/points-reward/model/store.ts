import { createStore, sample } from 'effector'
import { showPointsReward, showPointsRewardReset } from './events'
import { addSomeReward } from '@/entities/point'

export const $rewardFlash = createStore<number | null>(null)
	.on(showPointsReward, (_, payload) => payload)
	.reset(showPointsRewardReset)

sample({
	clock: addSomeReward,
	target: $rewardFlash,
})
