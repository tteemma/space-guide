'use client'

import { MarsRoverPhoto } from '@/entities/rover-photo/model/type'
import RoverPhoto from '@/entities/rover-photo/ui/RoverPhoto'
import RenderProps from '@/shared/lib/RenderProps'
import React from 'react'

interface MissionPhotosProps {
	photos: MarsRoverPhoto[]
}

const MissionPhotos = ({ photos }: MissionPhotosProps) => {
	if (photos.length === 0) return <main>No any</main>
	return (
		<RenderProps
			items={photos}
			render={photo => <RoverPhoto key={photo.id} photo={photo} />}
		/>
	)
}

export default MissionPhotos
