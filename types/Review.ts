import { User } from './Auth'

export type Review = {
  id: number
  content: string
  rating: number
  userId: number
  restaurantId: number
  createdAt: Date
  updatedAt: Date
  user: User
}

export type ReviewFormType = {
  rating: string
  content: string
}

export type SortOptions = 'created' | 'ratingDesc' | 'ratingAsc'
