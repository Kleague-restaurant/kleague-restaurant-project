'use client'
import {
  button,
  Card,
  flexCol,
  flexRowICenter,
  mainTitle,
} from '@/styles/customStyle'
import { Restaurant } from '@/types/Restaurant'
import { SortOptions } from '@/types/Review'
import React, { useEffect, useMemo, useState } from 'react'
import RestaurantReviewForm from './RestaurantReviewForm'
import RestaurantReviewsList from './RestaurantReviewsList'
import CustomSelectInput from '@/components/common/CustomSelectInput'
import { cn } from '@/utils/cn'
import { sortLabelToValueMap, sortValueToLabelMap } from '@/constants'
import { useReviewStore } from '@/store/useReviewStore'
import { useAuthStore } from '@/store/useAuthStore'
import { useRouter } from 'next/navigation'

type RestaurantReviewsProps = {
  restaurant: Restaurant
}

function RestauranttReviews({ restaurant }: RestaurantReviewsProps) {
  const router = useRouter()
  const { accessToken } = useAuthStore()
  const { reviews, setReviews } = useReviewStore()
  const [sortBy, setSortBy] = useState<SortOptions>('created')

  useEffect(() => {
    setReviews(restaurant.reviews)
  }, [restaurant.reviews, setReviews])

  const sortedReviews = useMemo(() => {
    return [...reviews].sort((a, b) => {
      switch (sortBy) {
        case 'created':
          return (
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
          )
        case 'ratingDesc':
          return b.rating - a.rating
        case 'ratingAsc':
          return a.rating - b.rating
        default:
          return 0
      }
    })
  }, [reviews, sortBy])

  return (
    <div className={cn('w-full', 'relative')}>
      <div
        className={cn(
          Card('w-full'),
          flexCol('gap-4'),
          !accessToken && 'blur-sm pointer-events-none select-none',
        )}
      >
        <div className={flexRowICenter('justify-between')}>
          <div
            className={mainTitle('w-full')}
          >{`리뷰(${reviews.length})`}</div>
          <div className={cn('w-[300px]')}>
            <CustomSelectInput
              placeholder="리뷰 정렬하기"
              name="sortBy"
              value={sortValueToLabelMap[sortBy]}
              onChange={(label) => {
                const mappedValue = sortLabelToValueMap[label]
                if (mappedValue) setSortBy(mappedValue)
              }}
              options={['작성 순', '별점 높은 순', '별점 낮은 순']}
            />
          </div>
        </div>
        <RestaurantReviewForm restaurantId={restaurant.id} />
        <RestaurantReviewsList reviews={sortedReviews} />
      </div>
      {!accessToken && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <div className={mainTitle('mb-4')}>
              리뷰를 보려면 로그인이 필요합니다
            </div>
            <button
              onClick={() => {
                router.push('/login')
              }}
              className={button()}
            >
              로그인 하러 가기
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RestauranttReviews
