import React from 'react'
import { LayersControl, TileLayer } from 'react-leaflet'

const SelectTypeUfo = () => {
	return (
		<LayersControl position='bottomleft'>
			<LayersControl.BaseLayer checked name='Satellite'>
				<TileLayer
					url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
					attribution='Tiles © Esri — Source: Esri, Maxar'
				/>
			</LayersControl.BaseLayer>

			<LayersControl.BaseLayer name='Default'>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; OpenStreetMap contributors'
				/>
			</LayersControl.BaseLayer>

			<LayersControl.BaseLayer name='Dark Mode'>
				<TileLayer
					url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
					attribution='&copy; Carto'
				/>
			</LayersControl.BaseLayer>
		</LayersControl>
	)
}

export default SelectTypeUfo
