import { MarsRoverPhoto } from '../model/type'
import styles from './RoverPhoto.module.scss'

export interface RoverPhotoProps {
	photo: MarsRoverPhoto
}

const RoverPhoto = ({ photo }: RoverPhotoProps) => {
	return (
		<div className={styles.card}>
			<img
				src={photo.img_src}
				alt={`Mars rover - ${photo.camera.full_name}`}
				className={styles.image}
			/>

			<div className={styles.info}>
				<h3>{photo.rover.name}</h3>
				<p>📅 Земная дата: {photo.earth_date}</p>
				<p>📷 Камера: {photo.camera.full_name}</p>
				<p>🚀 SOL: {photo.sol}</p>
			</div>
		</div>
	)
}

export default RoverPhoto
