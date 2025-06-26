'use client'

import { addNewApodFx } from '@/entities/apod/model/effect'
import { $apods } from '@/entities/apod/model/store'
import ApodInfo from '@/entities/apod/ui/ApodInfo'
import RenderProps from '@/shared/lib/RenderProps'
import { useUnit } from 'effector-react'

const ApodList = () => {
	const apods = useUnit($apods)
	const loadApods = useUnit(addNewApodFx)

	return (
		<main>
			<button onClick={loadApods}>LOAD APOD</button>
			<RenderProps
				items={apods}
				render={apod => <ApodInfo key={apod.title} apod={apod} />}
			/>
		</main>
	)
}
export default ApodList
