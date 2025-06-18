import SearchForm from '@/features/search/ui/SearchForm'
import SearchResults from '@/features/search/ui/SearchResults'

export default function SearchPage() {
	return (
		<main>
			<h1>🔭 Search for astronomical objects</h1>
			<section>
				<SearchForm />
			</section>
			<section>
				<h2>Результаты</h2>
				<SearchResults />
			</section>
		</main>
	)
}
