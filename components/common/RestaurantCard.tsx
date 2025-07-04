import {
  button,
  Card,
  flexCol,
  flexColIJCenter,
  flexRow,
  flexRowICenter,
  subTitle,
} from '@/styles/customStyle'
import { Restaurant, RestaurantViewType } from '@/types/Restaurant'
import { cn } from '@/utils/cn'
import RestaurantReviewStar from './RestaurantReviewStar'
import { useRouter } from 'next/navigation'
import FavoriteButton from '../Card/FavoriteButton'
import { memo } from 'react'

type RestaurantCardProps = {
  restaurant: Omit<Restaurant, 'reviews'>
  viewMode: RestaurantViewType
}

function RestaurantCard({
  restaurant,
  viewMode,
}: RestaurantCardProps) {
  const router = useRouter()

  const handleClick = (id: number) => {
    router.push(`/restaurants/${id}`)
  }

  return (
    <div
      className={Card('p-0', 'overflow-hidden', {
        'flex flex-col': viewMode === '카드형',
        'flex flex-row items-center': viewMode === '리스트형',
      })}
    >
      <div
        className={flexColIJCenter(
          'bg-gray-300',
          'text-gray-600',
          'relative',
          {
            'w-full h-35': viewMode === '카드형',
            'w-50 h-full': viewMode === '리스트형',
          },
        )}
      >
        이미지 준비중
        <div
          className={cn(
            'absolute',
            'top-2',
            'left-2',
            'px-2',
            'rounded-full',
            'text-xs',
            'bg-white',
            'border',
            'border-[#ccc]',
          )}
        >
          {restaurant.address.slice(0, 2)}
        </div>
        <div className={cn('absolute', 'top-2', 'right-2')}>
          <FavoriteButton restaurantId={restaurant.id} />
        </div>
      </div>
      <div className={flexCol('w-full', 'p-3', subTitle())}>
        <div className={flexRow('items-start', 'justify-between')}>
          <div
            className={cn('text-black', 'text-lg', 'font-semibold')}
          >
            {restaurant.name}
          </div>
          <div
            className={cn(
              'border',
              'border-[#ccc]',
              'rounded-full',
              'px-2',
              'text-nowrap',
            )}
          >
            {restaurant.category}
          </div>
        </div>
        <div>{restaurant.address}</div>
        <RestaurantReviewStar
          avgRating={restaurant.avgRating}
          reviewCount={restaurant.reviewCount}
        />
        <div className={flexRowICenter('justify-between')}>
          <div>{restaurant.stadium.name}</div>
          <div
            className={button()}
            onClick={() => handleClick(restaurant.id)}
          >
            상세보기
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(RestaurantCard)
