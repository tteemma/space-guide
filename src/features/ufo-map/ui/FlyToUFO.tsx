'use client'

import { LatLngExpression } from 'leaflet'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

interface Props {
	coords: LatLngExpression
	zoom?: number
}
const FlyToUFO = ({ coords, zoom }: Props) => {
	const map = useMap()

	useEffect(() => {
		map.flyTo(coords, zoom)
	}, [coords, zoom])
	return null
}

export default FlyToUFO
