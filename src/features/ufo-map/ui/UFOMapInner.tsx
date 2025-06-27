'use client'

import { useUnit } from 'effector-react'
import 'leaflet/dist/leaflet.css'
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	Circle,
	CircleMarker,
} from 'react-leaflet'
import { $ufoMapCoords } from '../model/store'
import RenderProps from '@/shared/lib/RenderProps'
import styles from './UFOMapInner.module.scss'
import FlyToUFO from './FlyToUFO'
import { $selected } from '@/features/select-ufo/model'
import { emptyIcon } from '../model/type'
import SelectTypeUfo from '@/features/select-ufo/ui/SelectTypeUfo'

const UFOMapInner = () => {
	const ufoSightings = useUnit($ufoMapCoords)
	const selected = useUnit($selected)

	return (
		<div className={styles.mapWrapper}>
			<div className={styles.mapTitle}>🛸 UFO Sightings Map</div>
			<MapContainer
				center={[10, 0]}
				zoom={2}
				minZoom={2}
				maxZoom={18}
				maxBounds={[
					[-90, -180],
					[90, 180],
				]}
				maxBoundsViscosity={1.0}
				zoomControl={true}
				className={styles.mapContainer}
				style={{
					height: '600px',
					width: '100%',
					borderRadius: '12px',
					boxShadow: '0 0 10px rgba(0,0,0,0.4)',
				}}
			>
				<SelectTypeUfo />

				<TileLayer
					url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
					attribution='&copy; <a href="https://carto.com/">Carto</a>'
				/>

				<RenderProps
					items={ufoSightings}
					render={ufoSighting => (
						<CircleMarker
							key={ufoSighting.id}
							center={[ufoSighting.lat, ufoSighting.lng]}
							radius={0}
							color='red'
						>
							<Circle
								center={[ufoSighting.lat, ufoSighting.lng]}
								radius={50}
								color='red'
							></Circle>
							<Popup>{ufoSighting.title}</Popup>
						</CircleMarker>
					)}
				/>

				{selected && <FlyToUFO coords={selected.coords} zoom={selected.zoom} />}
			</MapContainer>
		</div>
	)
}

export default UFOMapInner
