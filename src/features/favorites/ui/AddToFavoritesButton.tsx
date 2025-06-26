'use client'

import Button from '@/shared/ui/Button'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import styles from './AddToFavoritesButton.module.scss'

interface AddToFavoritesButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	inFavorites: boolean
}

const AddToFavoritesButton = ({
	inFavorites,
	...props
}: AddToFavoritesButtonProps) => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null)
	const [anim, setAnim] = useState<boolean>(false)

	useEffect(() => {
		if (inFavorites) {
			setAnim(true)
			timeoutRef.current = setTimeout(() => setAnim(false), 600)
			return () => {
				if (timeoutRef.current) clearTimeout(timeoutRef.current)
			}
		}
	}, [inFavorites])
	return (
		<Button
			{...props}
			className={clsx(styles.button, {
				[styles.animate]: anim,
				[styles.active]: inFavorites,
			})}
		>
			{inFavorites ? '★ ' : '☆ Add to '}Favorites
		</Button>
	)
}

export default AddToFavoritesButton
