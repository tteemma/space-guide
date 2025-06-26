'use client'

import dynamic from 'next/dynamic'

const UFOMap = dynamic(() => import('./UFOMapInner'), {
	ssr: false,
	loading: () => <div>Load card...</div>,
})

export default UFOMap
