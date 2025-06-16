'use client'

import { addNewRoverPhotos } from '@/entities/rover-photo/model/event'
import { $roverPhotos } from '@/entities/rover-photo/model/store'
import { MarsRoverPhoto } from '@/entities/rover-photo/model/type'
import RoverPhoto from '@/entities/rover-photo/ui/RoverPhoto'
import RenderProps from '@/shared/lib/RenderProps'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import styles from './RoverCarousel.module.scss'

interface RoverCarouselProps {
	roverPhotos: MarsRoverPhoto[]
}

const RoverCarousel = ({ roverPhotos }: RoverCarouselProps) => {
	const photos = useUnit($roverPhotos)

	useEffect(() => {
		if (roverPhotos.length > 0) {
			addNewRoverPhotos(roverPhotos)
		}
	}, [roverPhotos])

	return (
		<div className={styles.carousel}>
			<RenderProps
				items={photos.slice(0, 30)}
				render={photo => (
					<div className={styles.slide} key={photo.id}>
						<RoverPhoto photo={photo} />
					</div>
				)}
			/>
		</div>
	)
}

export default RoverCarousel
