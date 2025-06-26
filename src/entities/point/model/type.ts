export type PointReason =
	| 'add_apod'
	| 'add_asteroid'
	| 'view_rover_photo'
	| 'view_mission'
	| 'add_ufo'

export const POINT_REWARDS: Record<PointReason, number> = {
	add_apod: 10,
	add_ufo: 7,
	view_rover_photo: 5,
	add_asteroid: 3,
	view_mission: 2,
}
