import Try from '../try'

interface StaticProps {
	params: {
		id: string
	}
}

export const dynamic = 'force-dynamic'

export default async function MissionPage({ params }: StaticProps) {
	return <Try needId={params.id} />
}
