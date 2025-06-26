import CreateMissionForm from '@/features/create-mission/ui/CreateMissionForm'
import MissionList from '@/widgets/mission-list/ui/MissionList'

export default function MissionsPage() {
	return (
		<main>
			<h1>Space Missions</h1>
			<CreateMissionForm />
			<MissionList />
		</main>
	)
}
