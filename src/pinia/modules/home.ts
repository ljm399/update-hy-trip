import { defineStore } from 'pinia'
import { fetchHotSuggests, fetchHomeCategories, fetchHomeHouselist } from '@/api'

export const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [] as unknown[],
    categories: [] as unknown[],
    homeHouselist: [] as unknown[],
    currentPage: 1,
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await fetchHotSuggests()
      this.hotSuggests = (res as any).data
    },
    async fetchHomeCategories() {
      const res = await fetchHomeCategories()
      this.categories = (res as any).data
    },
    async fetchHomeHouselist() {
      const res = await fetchHomeHouselist(this.currentPage)
      const list = (res as any).data as unknown[]
      if (!list || list.length === 0) return
      this.homeHouselist.push(...list)
      this.currentPage++
    },
  },
})
