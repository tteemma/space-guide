import Link from 'next/link'
import { Mission } from '../type'
import styles from './MissionCard.module.scss'
import { addSomeReward, POINT_REWARDS } from '@/entities/point'

interface MissionCardProps {
	mission: Mission
}

const MissionCard = ({ mission }: MissionCardProps) => {
	return (
		<Link
			href={`missions/${mission.id}`}
			className={styles.card}
			onClick={() => {
				addSomeReward(POINT_REWARDS.view_mission)
			}}
		>
			<h3>{mission.name}</h3>
			<p>{mission.description}</p>
			<p>🚀 Rover: {mission.rover}</p>
		</Link>
	)
}

export default MissionCard
