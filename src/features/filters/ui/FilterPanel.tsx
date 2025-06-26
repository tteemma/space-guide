'use client'

import React from 'react'
import { setAsteroidFilters } from '../model/event'
import { FilterAsteroid, sortOptions } from '../model/type'
import { renderOptionLabel } from '../lib/renderOptionLabel'
import styles from './FilterPanel.module.scss'

const FilterPanel = () => {
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setAsteroidFilters({ sortBy: e.target.value } as FilterAsteroid)
	}
	const handleHazardous = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAsteroidFilters({ onlyHazardous: e.target.checked } as FilterAsteroid)
	}
	return (
		<div className={styles.panel}>
			<div className={styles.checkboxWrapper}>
				<label htmlFor='isHazardous'>
					<input id='isHazardous' type='checkbox' onChange={handleHazardous} />
					<span className={styles.customCheckbox}></span>
					Dangerous
				</label>
			</div>

			<select onChange={handleSelect} defaultValue='' className={styles.select}>
				<option value='' disabled>
					Sort by
				</option>
				{sortOptions.map(option => (
					<option key={option} value={option}>
						{renderOptionLabel(option)}
					</option>
				))}
			</select>
		</div>
	)
}

export default FilterPanel
