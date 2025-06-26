'use client'

import { useUnit } from 'effector-react'
import { $searchParams } from '../model/store'
import { setSearchParams } from '../model/event'
import { AsteroidSearchParams, defaultParams } from '../model/types'
import { useForm } from 'react-hook-form'
import styles from './SearchForm.module.scss'
const SearchForm = () => {
	const currentParams = useUnit($searchParams)

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<AsteroidSearchParams>({
		defaultValues: currentParams,
	})

	const onSubmit = (data: AsteroidSearchParams) => {
		setSearchParams(data)
	}
	const handleReset = () => {
		reset()
		setSearchParams(defaultParams)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.field}>
				<label htmlFor='date'>Observation date</label>
				<input
					type='date'
					id='date'
					{...register('date', { required: 'Date is required' })}
				/>
				{errors.date && (
					<span className={styles.error}>{errors.date.message}</span>
				)}
			</div>

			<div className={styles.field}>
				<label htmlFor='minDiameter'>Min diameter (m)</label>
				<input
					id='minDiameter'
					type='text'
					placeholder='e.g. 200'
					{...register('minDiameter')}
				/>
				{errors.minDiameter && (
					<span className={styles.error}>{errors.minDiameter.message}</span>
				)}
			</div>

			<div className={styles.field}>
				<label htmlFor='maxDiameter'>Max diameter (m)</label>
				<input
					type='text'
					id='maxDiameter'
					placeholder='Up to 100000'
					{...register('maxDiameter')}
				/>
				{errors.maxDiameter && (
					<span className={styles.error}>{errors.maxDiameter.message}</span>
				)}
			</div>

			<div className={styles.fieldCheckbox}>
				<label htmlFor='onlyHazardous'>
					<input
						id='onlyHazardous'
						type='checkbox'
						{...register('onlyHazardous')}
					/>
					Only potentially hazardous asteroids
				</label>
			</div>

			<button type='submit' className={styles.submitButton}>
				🔍 Search
			</button>
			<button
				type='button'
				onClick={handleReset}
				className={styles.resetButton}
			>
				❌Reset
			</button>
		</form>
	)
}

export default SearchForm
