'use client'

import { useUnit } from 'effector-react'
import { SelectedType, setSelect } from '../model'
import { $locations } from '../model/locations'
import styles from './SelectUfo.module.scss'
import { LOCATIONS_SAVE } from '@/shared/type'
import { useInitFromStorage } from '../lib/useInitFromStorage'
import { useSyncToLocalStorage } from '../lib/useSyncToLocalStorage'
import { saveSelect } from '../model/events'

const SelectUfo = () => {
	useInitFromStorage({ event: saveSelect, data: LOCATIONS_SAVE })
	const locations = useUnit($locations)
	useSyncToLocalStorage({ $store: $locations, data: LOCATIONS_SAVE })

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const index = Number(e.target.value)
		const selected = locations[index]
		if (selected) {
			setSelect({
				coords: selected.coords,
				zoom: selected.zoom,
			} as SelectedType)
		}
	}

	return (
		<div className={styles.selectWrapper}>
			<select className={styles.select} onChange={handleChange} defaultValue=''>
				<option value='' disabled>
					📡 Choose UFO location
				</option>
				{locations.map((location, index) => (
					<option key={index} value={index}>
						{location.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectUfo
