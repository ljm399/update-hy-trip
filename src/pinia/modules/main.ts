import { defineStore } from 'pinia'
import { formatTime, stayCount } from '@/utils/formatTime'

const nowDate = new Date()
const startDate = formatTime(nowDate)
const newDate = nowDate.setDate(nowDate.getDate() + 1)
const endDate = formatTime(newDate)
const stayDays = stayCount(startDate, endDate)

export const useMainStore = defineStore('main', {
  state: () => ({
    startDate,
    endDate,
    stayDays,
    isShowLoading: false,
  }),
  actions: {},
})
