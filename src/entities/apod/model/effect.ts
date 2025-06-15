import { fetchApod } from '@/shared/api/fetchApod'
import { createEffect } from 'effector'

export const addNewApodFx = createEffect(async () => {
	const data = fetchApod()
	if (!data) throw new Error('APOD is null')
	return data
})
