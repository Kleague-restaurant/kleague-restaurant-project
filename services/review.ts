import { Review } from '@/types/Review'
import axiosInstance from '@/utils/axiosInstance'

export const createReview = async (
  payload: Pick<Review, 'restaurantId' | 'rating' | 'content'>,
) => {
  const res = await axiosInstance.post('/reviews', payload)
  return res.data
}

export const editReview = async (
  id: number,
  payload: Partial<Pick<Review, 'rating' | 'content'>>,
) => {
  const res = await axiosInstance.patch(`/reviews/${id}`, payload)
  return res.data
}

export const deleteReview = async (payload: Pick<Review, 'id'>) => {
  const res = await axiosInstance.delete(`reviews/${payload.id}`)
  return res.data
}
