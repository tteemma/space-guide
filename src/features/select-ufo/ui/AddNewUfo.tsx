'use client'

import React from 'react'
import { useForm, FieldErrors } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { UfoSighting } from '@/features/ufo-map/model/type'
import { addNewFieldInSelect } from '../model'
import { addSomeReward, POINT_REWARDS } from '@/entities/point'
import styles from './AddNewUfo.module.scss'

interface AddNewUfoProps {
	isOpenForm: boolean
	onClose: () => void
}

const AddNewUfo = ({ isOpenForm, onClose }: AddNewUfoProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<UfoSighting>()

	const handleSubmitSuccess = (data: UfoSighting) => {
		const newSelect: UfoSighting = {
			...data,
			id: +uuidv4(),
		}
		addNewFieldInSelect(newSelect)
		addSomeReward(POINT_REWARDS.add_ufo)

		reset()
		onClose()
	}

	const handleSubmitWithError = (exception: FieldErrors) => {
		console.error(exception)
	}

	if (!isOpenForm) return null

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div
				className={styles.modalContent}
				onClick={(e: React.FormEvent) => e.stopPropagation()}
			>
				<button onClick={onClose} className={styles.closeBtn}>
					❌
				</button>
				<h2>➕ Add New UFO</h2>
				<form
					onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitWithError)}
				>
					<article>
						<label htmlFor='title'>Location Name</label>
						<input
							id='title'
							type='text'
							{...register('title', {
								required: `It's not empty`,
								minLength: {
									value: 3,
									message: 'Too short name',
								},
							})}
						/>
						{errors.title && <span>{errors.title.message}</span>}
					</article>
					<article>
						<label htmlFor='lat'>Latitude</label>
						<input
							type='number'
							step='any'
							id='lat'
							{...register('lat', {
								required: 'Latitude is required',
								min: { value: -90, message: 'Min is -90' },
								max: { value: 90, message: 'Max is 90' },
							})}
						/>
						{errors.lat && <span>{errors.lat.message}</span>}
					</article>

					<article>
						<label htmlFor='lng'>Longitude</label>
						<input
							type='number'
							step='any'
							id='lng'
							{...register('lng', {
								required: 'Longitude is required',
								min: { value: -180, message: 'Min is -180' },
								max: { value: 180, message: 'Max is 180' },
							})}
						/>
						{errors.lng && <span>{errors.lng.message}</span>}
					</article>

					<button type='submit'>Add UFO</button>
				</form>
			</div>
		</div>
	)
}

export default AddNewUfo
