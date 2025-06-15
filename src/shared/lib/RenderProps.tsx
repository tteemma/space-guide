'use client'

import { JSX } from 'react'

interface RenderPropsProp<T> {
	items: T[]
	render: (item: T) => JSX.Element
}

const RenderProps = <T, _>({ items, render }: RenderPropsProp<T>) => {
	return items.map(item => render(item))
}

export default RenderProps
