export interface Mission {
	id: string
	name: string
	description: string
	startDate: string
	endDate?: string
	rover: RoverType
}

export type RoverType = 'Curiosity' | 'Opportunity' | 'Spirit'

export const ROVER_TYPES: RoverType[] = ['Curiosity', 'Opportunity', 'Spirit']

export const missions: Mission[] = [
	{
		id: 'curiosity-crater-exploration',
		name: 'Curiosity: Crater Exploration',
		description: 'Exploring Gale Crater and analyzing soil samples.',
		startDate: '2012-08-06',
		rover: 'Curiosity',
	},
	{
		id: 'opportunity-victoria',
		name: 'Opportunity: Victoria Crater',
		description: 'Studying rock layers around Victoria Crater.',
		startDate: '2006-09-27',
		endDate: '2008-08-11',
		rover: 'Opportunity',
	},
]
