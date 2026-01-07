import { apiRequest } from '../request'

export function getDetailInfos(houseId: string | number) {
  return apiRequest.get<unknown>({
    url: '/detail/infos',
    params: {
      houseId,
    },
  })
}
