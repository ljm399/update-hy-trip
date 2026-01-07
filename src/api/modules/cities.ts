import { apiRequest } from '../request'

export type City = {
  cityName: string
  [key: string]: unknown
}

export type CityGroup = {
  group: string
  cities: City[]
}

export type CitiesGroupData = {
  title: string
  hotCities: City[]
  cities: CityGroup[]
}

export type AllCities = Record<string, CitiesGroupData>

export function getCities() {
  return apiRequest.get<AllCities>({
    url: '/city/all',
  })
}
