import { createEvent } from 'effector'

export const addSomeReward = createEvent<number>()
export const resetEvent = createEvent()
export const savePoints = createEvent<number>()
