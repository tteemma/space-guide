'use client'

import { useState } from 'react'
import AddNewUfo from './AddNewUfo'
import styles from './AddPanel.module.scss'

const AddPanel = () => {
	const [isOpenForm, setIsOpenForm] = useState(false)

	const toggleForm = () => setIsOpenForm(prev => !prev)

	return (
		<section className={styles.panel}>
			<button className={styles.toggleButton} onClick={toggleForm}>
				{isOpenForm ? '❌ Close' : '➕ Add new UFO'}
			</button>

			{isOpenForm && <AddNewUfo isOpenForm={isOpenForm} onClose={toggleForm} />}
		</section>
	)
}

export default AddPanel
