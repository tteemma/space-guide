import ApodInfo from '@/entities/apod/ui/ApodInfo'
import { fetchApod } from '@/shared/api/fetchApod'
import style from './page.module.scss'
import { fetchNEO } from '@/shared/api/fetchNEO'
import AsteroidSummary from '@/widgets/asteroid-summary/ui/AsteroidSummary'
import FilterPanel from '@/features/filters/ui/FilterPanel'
import { fetchReoverPhoto } from '@/shared/api/fetchReoverPhoto'
import RoverCarousel from '@/widgets/rover-carousel/ui/RoverCarousel'
import Link from 'next/link'
import InitFavoriteApod from '@/shared/InitFavoriteApod'

export const dynamic = 'force-static'

export default async function Home() {
	const apods = await fetchApod()
	const neo = await fetchNEO()
	const asteroids = neo ? Object.values(neo?.near_earth_objects).flat() : []
	const roverPhotos = await fetchReoverPhoto('curiosity')
	return (
		<main className={style.page}>
			<InitFavoriteApod />
			<h1 style={{ textAlign: 'center', margin: '1rem 0' }}>🌌 Space Guide</h1>
			<div style={{ textAlign: 'center', marginBottom: '1rem' }}>
				<Link href='/ufo' className={style.ufoLink}>
					<h2>🛸 UFO Tracker</h2>
				</Link>
				<Link href='/favorites' className={style.favoritesLink}>
					⭐ Go to Favorites
				</Link>
			</div>

			<div className={style.top}>
				<section className={style.apod__section}>
					<h2>🌠 APOD</h2>
					{apods && <ApodInfo apod={apods} />}
				</section>

				<section className={style.NEO}>
					<h2 className={style.neoHeader}>
						<Link href='search' className={style.searchLink}>
							☄️ Near Earth Objects
						</Link>
						<FilterPanel />
					</h2>
					<AsteroidSummary asteroids={asteroids} />
				</section>
			</div>

			<section className={style.rover__photo}>
				<h2>🚀 Rover Carousel</h2>
				<RoverCarousel roverPhotos={roverPhotos?.photos ?? []} />
			</section>
		</main>
	)
}
