import { Apod } from '../model/type'
import styles from './ApodInfo.module.scss'

interface ApodInfoProps {
	apod: Apod
}

const ApodInfo = ({ apod }: ApodInfoProps) => {
	return (
		<article className={styles.card}>
			<h2 className={styles.title}>{apod.title}</h2>
			<p className={styles.date}>{apod.date}</p>

			{apod.media_type === 'image' ? (
				<img
					src={apod.hdurl ?? apod.url}
					alt={apod.title}
					className={styles.image}
				/>
			) : (
				<iframe
					src={apod.url}
					title={apod.title}
					className={styles.video}
					allowFullScreen
				/>
			)}

			<p className={styles.explanation}>{apod.explanation}</p>

			{apod.copyright && <p className={styles.copyright}>© {apod.copyright}</p>}
		</article>
	)
}

export default ApodInfo
