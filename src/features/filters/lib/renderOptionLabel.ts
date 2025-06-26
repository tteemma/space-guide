import { FilterAsteroid } from '../model/type'

export const renderOptionLabel = (options: FilterAsteroid['sortBy']) => {
	switch (options) {
		case 'name':
			return 'By name'
		case 'diameter':
			return 'By diameter'
		case 'distance':
			return 'By distance'
	}
}
