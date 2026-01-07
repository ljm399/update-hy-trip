import { defineStore } from 'pinia'
import { getCities, type AllCities, type City } from '@/api'

export const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {} as AllCities,
    currentCity: { cityName: '广州' } as City,
  }),
  actions: {
    async fetchAllCities() {
      const res = await getCities()
      this.allCities = res.data
    },
  },
})
