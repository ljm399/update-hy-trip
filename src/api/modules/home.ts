import { apiRequest } from '../request'

export function fetchHotSuggests() {
  return apiRequest.get<unknown>({
    url: '/home/hotSuggests',
  })
}

export function fetchHomeCategories() {
  return apiRequest.get<unknown>({
    url: '/home/categories',
  })
}

export function fetchHomeHouselist(currentPage: number) {
  return apiRequest.get<unknown>({
    url: '/home/houselist',
    params: {
      page: currentPage,
    },
  })
}
