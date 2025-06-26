'use client'

import { createMission } from '@/entities/mission/model/event'
import { Mission, ROVER_TYPES, RoverType } from '@/entities/mission/type'
import { Controller, FieldErrors, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import styles from './CreateMissionForm.module.scss'
import { useUnit } from 'effector-react'
import { $mission } from '@/entities/mission/model/store'
import { useState } from 'react'

const CreateMissionForm = () => {
	const missions = useUnit($mission)
	const [isAdded, setIsAdded] = useState<boolean>(false)
	const {
		register,
		reset,
		formState: { errors },
		control,
		setError,
		handleSubmit,
	} = useForm<Mission>({
		defaultValues: {
			name: 'Space Jam',
			description: 'Find any new Asteroids in Mars',
			startDate: '2025-06-22',
			rover: 'Spirit',
		},
	})
	const handleSubmitSuccess = async (data: Mission) => {
		const exist = missions.some(
			mission =>
				mission.name.trim().toLowerCase() === data.name.trim().toLowerCase()
		)

		if (exist) {
			setError('name', {
				type: 'manual',
				message: 'Mission with this name already exists',
			})
			return
		}
		createMission({
			...data,
			id: uuidv4(),
			rover: data.rover.trim() as RoverType,
		})

		setIsAdded(true)
		setTimeout(() => {
			setIsAdded(false)
		}, 2000)

		reset()
	}
	const handleSubmitWithError = (exception: FieldErrors<Mission>) => {
		console.error(exception)
	}
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitWithError)}
		>
			<article>
				<label htmlFor='name'>Name</label>
				<input
					id='name'
					type='text'
					placeholder='Mission name'
					{...register('name', {
						required: `Mission name can't be null`,
						minLength: {
							value: 8,
							message: 'Min length is 8 symbols',
						},
					})}
				/>
				{errors.name && <span>{errors.name.message}</span>}
			</article>
			<article>
				<label htmlFor='description'>Description</label>
				<Controller
					name='description'
					control={control}
					defaultValue=''
					rules={{
						required: `Mission description can't be null`,
					}}
					render={({ field }) => (
						<textarea
							{...field}
							id='description'
							placeholder='Mission description'
						/>
					)}
				/>
				{errors.description && <span>{errors.description.message}</span>}
			</article>
			<article>
				<label htmlFor='startDate'>Start Date</label>
				<input
					id='startDate'
					type='date'
					{...register('startDate', {
						required: 'Start date is required',
					})}
				/>
				{errors.startDate && <span>{errors.startDate.message}</span>}
			</article>

			<article>
				<label htmlFor='endDate'>End Date</label>
				<input id='endDate' type='date' {...register('endDate')} />
			</article>
			<article>
				<label htmlFor='rover'>Rover</label>
				<select id='rover' {...register('rover')}>
					{ROVER_TYPES.map(type => (
						<option value={type} key={type}>
							{type}
						</option>
					))}
				</select>
			</article>

			<button>Create new Mission</button>
			{isAdded && (
				<span className={styles.success}>Mission successfully added!</span>
			)}
		</form>
	)
}

export default CreateMissionForm
