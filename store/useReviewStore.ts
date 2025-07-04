import {
  createReview,
  deleteReview,
  editReview,
} from '@/services/review'
import { Review } from '@/types/Review'
import { create } from 'zustand'

interface ReviewState {
  reviews: Review[]
  setReviews: (reviews: Review[]) => void
  addReview: (
    payload: Pick<Review, 'restaurantId' | 'rating' | 'content'>,
  ) => void
  editReview: (
    id: number,
    payload: Partial<Pick<Review, 'rating' | 'content'>>,
  ) => void
  deleteReview: (id: number) => void
}

export const useReviewStore = create<ReviewState>((set) => ({
  reviews: [],
  setReviews: (reviews) => {
    set({ reviews })
  },

  addReview: async ({ restaurantId, rating, content }) => {
    try {
      const res = await createReview({
        restaurantId,
        rating,
        content,
      })
      console.log(res)
      set((state) => ({
        reviews: [res, ...state.reviews],
      }))
    } catch (e) {
      console.error(e)
      throw new Error('리뷰 추가에 실패했습니다.')
    }
  },

  editReview: async (id, payload) => {
    try {
      const updated = await editReview(id, payload)
      set((state) => ({
        reviews: state.reviews.map((r) =>
          r.id === id ? updated : r,
        ),
      }))
    } catch (e) {
      console.error(e)
      throw new Error('리뷰 수정에 실패했습니다.')
    }
  },
  deleteReview: async (id) => {
    try {
      await deleteReview({ id })
      set((state) => ({
        reviews: state.reviews.filter((r) => r.id !== id),
      }))
    } catch (e) {
      console.error(e)
      throw new Error('리뷰 삭제에 실패했습니다.')
    }
  },
}))
