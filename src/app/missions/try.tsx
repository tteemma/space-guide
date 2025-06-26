'use client'
import { $mission } from '@/entities/mission/model/store'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import MissionCard from '@/entities/mission/ui/MissionCard'
import MissionPhotos from '@/widgets/mission-photos/ui/MissionPhotos'
import { fetchReoverPhoto } from '@/shared/api/fetchReoverPhoto'
import { MarsRoverPhoto } from '@/entities/rover-photo/model/type'
interface P {
	needId: string
}

const Try = ({ needId }: P) => {
	const mission = useUnit($mission).find(m => m.id === needId)
	const [photos, setPhotos] = useState<MarsRoverPhoto[]>([])

	useEffect(() => {
		if (mission) {
			const fetchData = async () => {
				try {
					const data = await fetchReoverPhoto(
						mission.rover.trim().toLocaleLowerCase()
					)
					setPhotos(data?.photos)
					console.log(data)
				} catch (ex) {
					setPhotos([])
				}
			}
			void fetchData()
		}
	}, [mission])
	console.log(photos)

	if (!mission)
		return <main className={styles.page}>Not found any missions</main>

	if (!photos && photos === null)
		return <div className={styles.page}>Not photo</div>

	return (
		<main className={styles.page}>
			<h1 className={styles.title}>{mission.name} Mission</h1>
			<MissionCard mission={mission} />
			<h2 className={styles.sectionTitle}>📸 Rover Photos</h2>
			<MissionPhotos photos={photos} />
		</main>
	)
}

export default Try
