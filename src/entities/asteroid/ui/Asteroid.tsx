import { NearEarthObject } from '../type'
import styles from './Asteroid.module.scss'
import cn from 'clsx'

interface AsteroidProps {
	asteroid: NearEarthObject
}

const Asteroid = ({ asteroid }: AsteroidProps) => {
	const diameter =
		asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)
	const velocity =
		asteroid.close_approach_data[0]?.relative_velocity.kilometers_per_hour
	const distance = asteroid.close_approach_data[0]?.miss_distance.kilometers

	return (
		<article
			className={cn(styles.card, {
				[styles.hazard]: asteroid.is_potentially_hazardous_asteroid,
				[styles.safe]: !asteroid.is_potentially_hazardous_asteroid,
			})}
		>
			<h3 className={styles.name}>{asteroid.name}</h3>
			<ul className={styles.info}>
				<li>
					<strong>Размер:</strong> {diameter} км
				</li>
				<li>
					<strong>Скорость:</strong> {(+velocity).toFixed(0)} км/ч
				</li>
				<li>
					<strong>Расстояние:</strong> {(+(distance ?? 0) / 1000000).toFixed(2)}{' '}
					млн км
				</li>
				<li>
					<strong>Орбита:</strong>{' '}
					{asteroid.close_approach_data[0]?.orbiting_body}
				</li>
				<li>
					<strong>Опасен:</strong>{' '}
					{asteroid.is_potentially_hazardous_asteroid ? '🟥 Да' : '🟩 Нет'}
				</li>
			</ul>
		</article>
	)
}

export default Asteroid
