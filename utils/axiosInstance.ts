import { useAuthStore } from '@/store/useAuthStore'

import axios from 'axios'

const BASE_URL = 'https://kleague-restaurant-api.gaanii.dev'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

axiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`
  } else {
    delete config.headers['Authorization']
  }
  return config
})

export default axiosInstance
