import { createEvent } from 'effector'
import { SelectedType } from './type'
import { UfoSighting } from '@/features/ufo-map/model/type'

export const setSelect = createEvent<SelectedType>()

export const addNewFieldInSelect = createEvent<UfoSighting>()

export const saveSelect = createEvent<SelectedType[]>()
