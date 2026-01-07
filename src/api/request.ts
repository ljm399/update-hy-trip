import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { useMainStore } from '@/pinia/modules/main'

export type ApiEnvelope<T> = {
  data: T
  [key: string]: unknown
}

class ApiRequest {
  private instance: AxiosInstance

  constructor(baseURL: string, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    this.instance.interceptors.request.use(
      (config) => {
        try {
          const mainStore = useMainStore()
          mainStore.isShowLoading = true
        } catch {
          // ignore
        }
        return config
      },
      (err) => {
        try {
          const mainStore = useMainStore()
          mainStore.isShowLoading = false
        } catch {
          // ignore
        }
        return err
      },
    )

    this.instance.interceptors.response.use(
      (res) => {
        try {
          const mainStore = useMainStore()
          mainStore.isShowLoading = false
        } catch {
          // ignore
        }
        return res
      },
      (err) => {
        try {
          const mainStore = useMainStore()
          mainStore.isShowLoading = false
        } catch {
          // ignore
        }
        return err
      },
    )
  }

  request<T>(config: AxiosRequestConfig) {
    return this.instance.request<ApiEnvelope<T>>(config).then((res) => res.data)
  }

  get<T>(config: AxiosRequestConfig) {
    return this.request<T>({
      ...config,
      method: 'get',
    })
  }

  post<T>(config: AxiosRequestConfig) {
    return this.request<T>({
      ...config,
      method: 'post',
    })
  }
}

export const apiRequest = new ApiRequest('http://123.207.32.32:1888/api', 10000)
