import AddPanel from '@/features/select-ufo/ui/AddPanel'
import SelectUfo from '@/features/select-ufo/ui/SelectUfo'
import UFOMap from '@/features/ufo-map/ui/UFOMap'
import styles from './page.module.scss'
export default function UFOPage() {
	return (
		<main className={styles.containerUfoPage}>
			<h1>🛸 UFO Tracker</h1>
			<section className={styles.selectTabs}>
				<SelectUfo />
				<AddPanel />
			</section>

			<UFOMap />
		</main>
	)
}
