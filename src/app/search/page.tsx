import SearchForm from '@/features/search/ui/SearchForm'
import SearchResults from '@/features/search/ui/SearchResults'
import styles from './page.module.scss'

export default function SearchPage() {
	return (
		<main className={styles.page}>
			<h1>🔭 Search for astronomical objects</h1>
			<section>
				<SearchForm />
			</section>
			<section>
				<h2>Results</h2>
				<SearchResults />
			</section>
		</main>
	)
}
