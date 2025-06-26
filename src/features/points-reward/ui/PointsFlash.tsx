'use client'

import { useUnit } from 'effector-react'
import { $rewardFlash, showPointsRewardReset } from '../model'
import style from './PointsFlash.module.scss'
import { useEffect, useRef } from 'react'

const PointsFlash = () => {
	const reward = useUnit($rewardFlash)
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	useEffect(() => {
		if (reward !== null) {
			timerRef.current = setTimeout(() => {
				showPointsRewardReset()
			}, 1200)

			return () => {
				if (timerRef.current) clearTimeout(timerRef.current)
			}
		}
	}, [reward])

	if (reward === null) return null

	return <div className={style.rewardText}>+ {reward} points</div>
}

export default PointsFlash
