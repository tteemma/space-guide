import { FilterAsteroid } from '../model/type'

export const renderOptionLabel = (options: FilterAsteroid['sortBy']) => {
	switch (options) {
		case 'name':
			return 'По названию'
		case 'diameter':
			return 'По диаметру'
		case 'distance':
			return 'По расстоянию'
	}
}
