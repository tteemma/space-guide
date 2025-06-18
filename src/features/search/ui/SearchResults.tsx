'use client'

import { useUnit } from 'effector-react'
import { $searchResult } from '../model/searchResult'
import RenderProps from '@/shared/lib/RenderProps'
import Asteroid from '@/entities/asteroid/ui/Asteroid'
import { fetchAsteroidsByParamsFx } from '../model/effects'

const SearchResults = () => {
	const { searchResults, isPending } = useUnit({
		searchResults: $searchResult,
		isPending: fetchAsteroidsByParamsFx.pending,
	})

	if (isPending) return <main>Data loading</main>

	return (
		<>
			{searchResults.length === 0 && <main>No any asteroid!</main>}
			<RenderProps
				items={searchResults}
				render={search => <Asteroid key={search.id} asteroid={search} />}
			/>
		</>
	)
}

export default SearchResults
