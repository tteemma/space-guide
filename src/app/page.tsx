import ApodInfo from '@/entities/apod/ui/ApodInfo'
import { fetchApod } from '@/shared/api/fetchApod'
import style from './page.module.scss'
import { fetchNEO } from '@/shared/api/fetchNEO'
import AsteroidSummary from '@/widgets/asteroid-summary/ui/AsteroidSummary'
import FilterPanel from '@/features/filters/ui/FilterPanel'
import { fetchReoverPhoto } from '@/shared/api/fetchReoverPhoto'
import RoverCarousel from '@/widgets/rover-carousel/ui/RoverCarousel'
import Link from 'next/link'

export const dynamic = 'force-static'

export default async function Home() {
	const apods = await fetchApod()
	const neo = await fetchNEO()
	const asteroids = neo ? Object.values(neo?.near_earth_objects).flat() : []
	const roverPhotos = await fetchReoverPhoto()

	return (
		<main className={style.page}>
			<h1 style={{ textAlign: 'center', margin: '1rem 0' }}>🌌 Space Guide</h1>

			<div className={style.top}>
				<section className={style.apod__section}>
					<h2>🌠 APOD</h2>
					{apods && <ApodInfo apod={apods} />}
				</section>

				<section className={style.NEO}>
					<h2 className={style.neoHeader}>
						<Link href='search' className={style.seachLink}>
							☄️ Near Earth Objects
						</Link>
						{/* ☄️ Near Earth Objects */}
						<FilterPanel />
					</h2>
					<AsteroidSummary asteroids={asteroids} />
				</section>
			</div>

			<section className={style.rover__photo}>
				<h2>🚀 Карусель марсоходов</h2>
				<RoverCarousel roverPhotos={roverPhotos?.photos ?? []} />
			</section>
		</main>
	)
}
