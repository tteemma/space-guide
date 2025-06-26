'use client'
import MissionCard from '@/entities/mission/ui/MissionCard'
import RenderProps from '@/shared/lib/RenderProps'
import styles from './MissionList.module.scss'
import { useUnit } from 'effector-react'
import { $mission } from '@/entities/mission/model/store'

const MissionList = () => {
	const missions = useUnit($mission)
	return (
		<div className={styles.list}>
			<RenderProps
				items={missions}
				render={mission => <MissionCard key={mission.id} mission={mission} />}
			/>
		</div>
	)
}

export default MissionList
