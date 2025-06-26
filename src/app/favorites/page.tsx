import Link from 'next/link'
import styles from './page.module.scss'
import FavoritesList from '@/widgets/favorites-list/ui/FavoritesList'

export default function FavoritesPage() {
	return (
		<main className={styles.page}>
			<Link href='/' className={styles.link}>
				<h1 className={styles.pageTitle}>⭐ Favorites</h1>
			</Link>
			<FavoritesList />
		</main>
	)
}
